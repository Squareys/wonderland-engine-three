# Wonderland Engine - Three.js Integration

Utilities for integrating Three.js with Wonderland Engine.

## Motivation

While Wonderland Engine is not based on Three.js and therefore doesn't
integrate trivially, the community and ecosystem around Three.js is
absolutely massive.

To be able to use some of the utilities from Three.js, this repository
aims to achieve conversion utilities where possible.

## Contents

`three-to-wl-mesh.js` contains a utility function to convert a Three.js
Geometry to a Wonderland Engine Mesh.

`example/js/three-text-mesh.ts` demonstrates how to use that function
with `FontLoader` and `TextGeometry`.

![Wonderland Engine Three.js TextGeometry Example](https://github.com/Squareys/wonderland-engine-three/blob/main/images/wle-three-text-mesh.png)

## License

The code in this repository is licensed under MIT License.
See the LICENSE file for more information.
