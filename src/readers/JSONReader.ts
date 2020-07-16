import { XMLBuilder } from "../interfaces"
import { ObjectReader } from "./ObjectReader"

/**
 * Parses XML nodes from JSON string.
 */
export class JSONReader {

  /**
   * Parses the given document representation.
   * 
   * @param node - node receive parsed XML nodes
   * @param str - JSON string to parse
   */
  parse(node: XMLBuilder, str: string): XMLBuilder {
    return new ObjectReader(node.options).parse(node, JSON.parse(str))
  }
}
