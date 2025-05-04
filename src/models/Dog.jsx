import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/dog.glb";

// export function Dog({ currentAnimation, ...props }) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(scene);
//   const { actions } = useAnimations(animations, group);

//   // Animation mapping - in case your animation names don't match exactly
//   const animationMap = {
//     idle: "idle", // Map your intended animations to actual animation names
//     walk: "walk",
//     hit: "hit"
//     // Add more mappings as needed
//   };

//   useEffect(() => {
//     console.log("Available animations:", Object.keys(actions)); // Log actual animation names
    
//     // Get the correct animation name from the map, or use the original name
//     const animationName = animationMap[currentAnimation] || currentAnimation;
    
//     // Stop any playing animations first
//     Object.values(actions).forEach(action => action.stop());
    
//     if (actions[animationName]) {
//       actions[animationName].reset().fadeIn(0.5).play();
//       console.log(`Playing animation: ${animationName}`);
//     } else {
//       console.warn(`Animation "${animationName}" not found`);
      
//       // Fallback to idle animation if the requested animation doesn't exist
//       if (actions["idle"]) {
//         actions["idle"].reset().fadeIn(0.5).play();
//         console.log("Falling back to idle animation");
//       }
//     }
    
//     return () => {
//       if (actions[animationName]) {
//         actions[animationName].fadeOut(0.5);
//       }
//     };
//   }, [currentAnimation, actions]);

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group
//           name="Sketchfab_model"
//           rotation={[-Math.PI / 2, 0, 0]}
//           position={[0, -2, 0]} // Adjust vertical position
//           scale={1.8} // Adjust scale as needed
//         >
//           <group name="root">
//             <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
//               <group name="Playful_dog_124">
//                 <group name="Playful_dog_Skeleton_123" scale={0.01}>
//                   <group name="geo1_0" />
//                   <group name="skeletal3_1">
//                     <group name="GLTF_created_0">
//                       <primitive object={nodes.GLTF_created_0_rootJoint} />
//                       <skinnedMesh
//                         name="Object_132"
//                         geometry={nodes.Object_132.geometry}
//                         material={materials.material0}
//                         skeleton={nodes.Object_132.skeleton}
//                       />
//                       <group name="shiba_inu2_125_correction">
//                         <group name="shiba_inu2_125" />
//                       </group>
//                     </group>
//                   </group>
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// export default Dog;

export function Dog({ currentAnimation, ...props }) {
  const group = useRef();
  const { scene: dogScene, nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // Debug log to see what we're actually working with
  useEffect(() => {
    console.log("Dog Model Details:");
    console.log("Nodes:", nodes);
    console.log("Materials:", materials);
    console.log("Animations:", animations);
    console.log("Available actions:", actions);
  }, []);

  // Handle animations
  useEffect(() => {
    // Stop all animations first
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
      console.log(`Playing animation: ${currentAnimation}`);
    } else {
      console.warn(`Animation "${currentAnimation}" not found`);

      // Find first available animation as fallback
      const availableAnimations = Object.keys(actions);
      if (availableAnimations.length > 0) {
        const fallbackAnim = availableAnimations[0];
        actions[fallbackAnim].reset().fadeIn(0.5).play();
        console.log(`Falling back to animation: ${fallbackAnim}`);
      }
    }

    return () => {
      if (actions[currentAnimation]) {
        actions[currentAnimation].fadeOut(0.5);
      }
    };
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Use the whole scene as is, without manually specifying meshes */}
      <primitive
        object={dogScene}
        scale={1.5}
        position={[0, -0.8, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload(scene);

export default Dog;