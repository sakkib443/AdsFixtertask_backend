export const executeFlowStep = (nodes: any[], edges: any[], currentNodeId: string | null, input?: string) => {
    // If no current node, start from the 'start' node
    if (!currentNodeId) {
        const startNode = nodes.find((node) => node.type === 'start');
        return startNode || null;
    }

    // Find the current node
    const currentNode = nodes.find((node) => node.id === currentNodeId);
    if (!currentNode) return null;

    // Find the edge coming out of the current node
    // For condition nodes, we need to check the input
    const outgoingEdges = edges.filter((edge) => edge.source === currentNodeId);

    if (currentNode.type === 'condition') {
        // Basic if/else logic for condition node
        // data.condition: { ifValue: 'yes', thenNode: 'nodeId', elseNode: 'nodeId' }
        const { ifValue } = currentNode.data;
        const isTrue = input?.toLowerCase() === ifValue?.toLowerCase();

        // We expect edges to have sourceHandle like 'true' or 'false'
        const targetEdge = outgoingEdges.find(edge => edge.sourceHandle === (isTrue ? 'true' : 'false'));
        if (targetEdge) {
            return nodes.find(node => node.id === targetEdge.target);
        }
    }

    // For regular nodes, just take the first edge
    if (outgoingEdges.length > 0) {
        const nextNode = nodes.find((node) => node.id === outgoingEdges[0].target);
        return nextNode || null;
    }

    return null;
};
