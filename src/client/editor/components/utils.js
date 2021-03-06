import THREE from "../three";

export const types = {
  color: "color",
  number: "number",
  vector: "vector",
  euler: "euler",
  boolean: "boolean",
  file: "file",
  string: "string"
};

const geometry = new THREE.SphereBufferGeometry(1, 4, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, visible: false });

export function addPicker(parent, selectionRoot) {
  const picker = new THREE.Mesh(geometry, material);
  picker.name = "picker";
  picker.userData._selectionRoot = selectionRoot;
  parent.add(picker);
}
