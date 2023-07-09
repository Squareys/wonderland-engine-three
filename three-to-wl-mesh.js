import {MeshAttribute} from '@wonderlandengine/api';

/**
 * Convert a THREE.BufferGeometry into a WL.Mesh.
 *
 * @param {BufferGeometry} geometry Any THREE.js BufferGeometry
 * @returns {WL.Mesh} Converted Wonderland Engine Mesh with positions and texture coordinates, if available.
 */
export function threeToWonderlandMesh(engine, geometry) {
  if(!geometry.attributes.position) {
      throw new Error("Cannot convert Three mesh without positions");
  }

  const mesh = new WL.Mesh(engine, {
    vertexCount: geometry.attributes.position.count,
    indexData: geometry.index?.array,
  });

  const positions = mesh.attribute(MeshAttribute.Position);
  if (positions && geometry.attributes.position) {
    positions.set(0, geometry.attributes.position.array);
  }

  const textureCoodinates = mesh.attribute(
    MeshAttribute.TextureCoordinate
  );
  if (textureCoodinates && geometry.attributes.uv) {
    textureCoodinates.set(0, geometry.attributes.uv.array);
  }

  const normals = mesh.attribute(MeshAttribute.Normal);
  if (normals && geometry.attributes.normal) {
    normals.set(0, geometry.attributes.normal.array);
  }

  return mesh;
}

