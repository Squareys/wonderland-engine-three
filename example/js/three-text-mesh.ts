import {Component, Material, MeshComponent} from '@wonderlandengine/api';
import {property} from '@wonderlandengine/api/decorators.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import {threeToWonderlandMesh} from 'three-to-wl-mesh';

const loader = new FontLoader();

/**
 * three-text-mesh
 */
export class ThreeTextMesh extends Component {
    static TypeName = 'three-text-mesh';

    /* Properties that are configurable in the editor */

    @property.string("Hello three.js from Wonderland Engine!")
    text!: string;

    @property.material()
    material!: Material;

    @property.string("fonts/helvetiker_regular.typeface.json")
    threeFontUrl!: string;

    @property.int(80)
    size!: number;

    @property.int(5)
    height!: number;

    @property.int(12)
    curveSegments!: number;

    @property.bool(true)
    bevelEnabled!: boolean;

    @property.int(10)
    bevelThickness!: number;

    @property.int(8)
    bevelSize!: number;

    @property.int(0)
    bevelOffset!: number;

    @property.int(5)
    bevelSegments!: number;

    start() {
        loader.load(this.threeFontUrl, (font) => {
            const geometry = new TextGeometry(this.text, {
                font: font,
                size: this.size,
                height: this.height,
                curveSegments: this.curveSegments,
                bevelEnabled: this.bevelEnabled,
                bevelThickness: this.bevelThickness,
                bevelSize: this.bevelSize,
                bevelOffset: this.bevelOffset,
                bevelSegments: this.bevelSegments,
            });

            this.object.addComponent(MeshComponent, {
                mesh: threeToWonderlandMesh(this.engine, geometry),
                material: this.material,
            });
        });
    }
}
