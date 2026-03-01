/**
 * CiGateway — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { ExternalAdapterOrchestrator } from "@webwaka/organelle-external-adapter";
import { MessageGatewayOrchestrator } from "@webwaka/organelle-message-gateway";

export { ExternalAdapterOrchestrator } from '@webwaka/organelle-external-adapter';
export { MessageGatewayOrchestrator } from '@webwaka/organelle-message-gateway';

/**
 * CiGateway Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class CiGatewayComposition {
  private externalAdapterOrchestrator: ExternalAdapterOrchestrator;
  private messageGatewayOrchestrator: MessageGatewayOrchestrator;

  constructor() {
    this.externalAdapterOrchestrator = new ExternalAdapterOrchestrator();
    this.messageGatewayOrchestrator = new MessageGatewayOrchestrator();
  }
}

export * from "./types";
