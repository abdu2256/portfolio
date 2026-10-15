import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Helper to safely check if WebGL is supported
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export default function ThreeHeroCanvas() {
  const mountRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Gracefully exit if WebGL is not available on device/browser (e.g. older iOS Safari)
    if (!isWebGLAvailable()) {
      setHasError(true);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let renderer, scene, camera, animationFrameId;
    let outerGeo, outerMat, coreGeo, coreMat, ringGeo1, ringMat1, ringGeo2, ringMat2, nodeGeo, nodeMat;

    try {
      const width = Math.max(container.clientWidth || window.innerWidth || 320, 1);
      const height = Math.max(container.clientHeight || window.innerHeight || 480, 1);

      // Scene & Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 7.5);

      // Renderer setup with safe mobile/iOS defaults
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio ? window.devicePixelRatio <= 1.5 : false,
        powerPreference: 'default', // Safe for iOS and battery-saving modes
        precision: 'mediump' // Highly optimized for mobile WebKit
      });

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width, height);

      // Handle iOS WebGL context loss cleanly
      const domElement = renderer.domElement;
      domElement.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        cancelAnimationFrame(animationFrameId);
      }, false);

      container.appendChild(domElement);

      // Group
      const group = new THREE.Group();
      scene.add(group);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x818cf8, 2.2);
      dirLight1.position.set(5, 8, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xa855f7, 1.8);
      dirLight2.position.set(-6, -4, -3);
      scene.add(dirLight2);

      // Part 1: Outer Wireframe Geometric Lattice
      outerGeo = new THREE.IcosahedronGeometry(2.0, 1);
      outerMat = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        wireframe: true,
        roughness: 0.25,
        metalness: 0.8,
        emissive: 0x4f46e5,
        emissiveIntensity: 0.25
      });
      const outerMesh = new THREE.Mesh(outerGeo, outerMat);
      group.add(outerMesh);

      // Part 2: Inner Core
      coreGeo = new THREE.DodecahedronGeometry(1.0, 0);
      coreMat = new THREE.MeshStandardMaterial({
        color: 0x1e1b4b,
        roughness: 0.2,
        metalness: 0.85,
        emissive: 0x312e81,
        emissiveIntensity: 0.35
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      group.add(coreMesh);

      // Part 3: Orbital Rings
      ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 12, 64);
      ringMat1 = new THREE.MeshStandardMaterial({
        color: 0x818cf8,
        roughness: 0.3,
        metalness: 0.8,
        emissive: 0x6366f1,
        emissiveIntensity: 0.4
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      group.add(ring1);

      ringGeo2 = new THREE.TorusGeometry(3.1, 0.015, 12, 64);
      ringMat2 = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        roughness: 0.3,
        metalness: 0.8,
        emissive: 0xa855f7,
        emissiveIntensity: 0.35
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 3;
      ring2.rotation.x = -Math.PI / 6;
      group.add(ring2);

      // Part 4: Light Constellation Nodes
      const isMobile = window.innerWidth <= 768;
      const nodeCount = isMobile ? 18 : 32;
      nodeGeo = new THREE.SphereGeometry(0.045, 8, 8);
      nodeMat = new THREE.MeshStandardMaterial({
        color: 0xa5b4fc,
        emissive: 0xc7d2fe,
        emissiveIntensity: 0.7,
        roughness: 0.2,
        metalness: 0.5
      });
      const instancedNodes = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);
      const dummy = new THREE.Object3D();

      for (let i = 0; i < nodeCount; i++) {
        const radius = 2.3 + Math.random() * 0.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        dummy.position.set(x, y, z);
        const scale = 0.6 + Math.random() * 0.6;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        instancedNodes.setMatrixAt(i, dummy.matrix);
      }
      instancedNodes.instanceMatrix.needsUpdate = true;
      group.add(instancedNodes);

      // Pointer tracking
      let targetX = 0;
      let targetY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const onPointerMove = (e) => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 0.45;
        targetY = y * 0.35;
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });

      // Safe Resize Handler
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const w = Math.max(container.clientWidth || window.innerWidth || 320, 1);
        const h = Math.max(container.clientHeight || window.innerHeight || 480, 1);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize, { passive: true });

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const delta = Math.min(clock.getDelta(), 0.1);

        mouseX = THREE.MathUtils.damp(mouseX, targetX, 3.0, delta);
        mouseY = THREE.MathUtils.damp(mouseY, targetY, 3.0, delta);

        group.rotation.y += delta * 0.22;
        group.rotation.x = Math.sin(clock.getElapsedTime() * 0.35) * 0.12 + mouseY * 0.5;
        group.rotation.z = Math.cos(clock.getElapsedTime() * 0.25) * 0.08 - mouseX * 0.5;

        coreMesh.rotation.y -= delta * 0.35;
        ring1.rotation.z += delta * 0.25;
        ring2.rotation.z -= delta * 0.18;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('resize', handleResize);

        try {
          outerGeo?.dispose();
          outerMat?.dispose();
          coreGeo?.dispose();
          coreMat?.dispose();
          ringGeo1?.dispose();
          ringMat1?.dispose();
          ringGeo2?.dispose();
          ringMat2?.dispose();
          nodeGeo?.dispose();
          nodeMat?.dispose();
          renderer?.dispose();

          if (domElement && domElement.parentNode) {
            domElement.parentNode.removeChild(domElement);
          }
        } catch (_) {}
      };
    } catch (err) {
      console.warn('Three.js canvas init safe fallback:', err);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    // Elegant CSS glow fallback if WebGL fails on iOS Safari
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl opacity-70" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
