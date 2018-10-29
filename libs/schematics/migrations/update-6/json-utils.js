"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appendPropertyInAstObject(recorder, node, propertyName, value, indent = 4) {
    const indentStr = '\n' + new Array(indent + 1).join(' ');
    if (node.properties.length > 0) {
        // Insert comma.
        const last = node.properties[node.properties.length - 1];
        recorder.insertRight(last.start.offset + last.text.replace(/\s+$/, '').length, ',');
    }
    recorder.insertLeft(node.end.offset - 1, '  '
        + `"${propertyName}": ${JSON.stringify(value, null, 2).replace(/\n/g, indentStr)}`
        + indentStr.slice(0, -2));
}
exports.appendPropertyInAstObject = appendPropertyInAstObject;
function appendValueInAstArray(recorder, node, value, indent = 4) {
    const indentStr = '\n' + new Array(indent + 1).join(' ');
    if (node.elements.length > 0) {
        // Insert comma.
        const last = node.elements[node.elements.length - 1];
        recorder.insertRight(last.start.offset + last.text.replace(/\s+$/, '').length, ',');
    }
    recorder.insertLeft(node.end.offset - 1, '  '
        + JSON.stringify(value, null, 2).replace(/\n/g, indentStr)
        + indentStr.slice(0, -2));
}
exports.appendValueInAstArray = appendValueInAstArray;
function findPropertyInAstObject(node, propertyName) {
    let maybeNode = null;
    for (const property of node.properties) {
        if (property.key.value == propertyName) {
            maybeNode = property.value;
        }
    }
    return maybeNode;
}
exports.findPropertyInAstObject = findPropertyInAstObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsicGFja2FnZXMvc2NoZW1hdGljcy9hbmd1bGFyL21pZ3JhdGlvbnMvdXBkYXRlLTYvanNvbi11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBLG1DQUNFLFFBQXdCLEVBQ3hCLElBQW1CLEVBQ25CLFlBQW9CLEVBQ3BCLEtBQWdCLEVBQ2hCLE1BQU0sR0FBRyxDQUFDO0lBRVYsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixnQkFBZ0I7UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVLENBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbkIsSUFBSTtVQUNGLElBQUksWUFBWSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1VBQ2hGLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pCLENBQUM7QUFDSixDQUFDO0FBckJELDhEQXFCQztBQUdELCtCQUNFLFFBQXdCLEVBQ3hCLElBQWtCLEVBQ2xCLEtBQWdCLEVBQ2hCLE1BQU0sR0FBRyxDQUFDO0lBRVYsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixnQkFBZ0I7UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRCxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVLENBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbkIsSUFBSTtVQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztVQUN4RCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN6QixDQUFDO0FBQ0osQ0FBQztBQXBCRCxzREFvQkM7QUFHRCxpQ0FDRSxJQUFtQixFQUNuQixZQUFvQjtJQUVwQixJQUFJLFNBQVMsR0FBdUIsSUFBSSxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFaRCwwREFZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEpzb25Bc3RBcnJheSwgSnNvbkFzdE5vZGUsIEpzb25Bc3RPYmplY3QsIEpzb25WYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IFVwZGF0ZVJlY29yZGVyIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvcGVydHlJbkFzdE9iamVjdChcbiAgcmVjb3JkZXI6IFVwZGF0ZVJlY29yZGVyLFxuICBub2RlOiBKc29uQXN0T2JqZWN0LFxuICBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbiAgdmFsdWU6IEpzb25WYWx1ZSxcbiAgaW5kZW50ID0gNCxcbikge1xuICBjb25zdCBpbmRlbnRTdHIgPSAnXFxuJyArIG5ldyBBcnJheShpbmRlbnQgKyAxKS5qb2luKCcgJyk7XG5cbiAgaWYgKG5vZGUucHJvcGVydGllcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gSW5zZXJ0IGNvbW1hLlxuICAgIGNvbnN0IGxhc3QgPSBub2RlLnByb3BlcnRpZXNbbm9kZS5wcm9wZXJ0aWVzLmxlbmd0aCAtIDFdO1xuICAgIHJlY29yZGVyLmluc2VydFJpZ2h0KGxhc3Quc3RhcnQub2Zmc2V0ICsgbGFzdC50ZXh0LnJlcGxhY2UoL1xccyskLywgJycpLmxlbmd0aCwgJywnKTtcbiAgfVxuXG4gIHJlY29yZGVyLmluc2VydExlZnQoXG4gICAgbm9kZS5lbmQub2Zmc2V0IC0gMSxcbiAgICAnICAnXG4gICAgKyBgXCIke3Byb3BlcnR5TmFtZX1cIjogJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMikucmVwbGFjZSgvXFxuL2csIGluZGVudFN0cil9YFxuICAgICsgaW5kZW50U3RyLnNsaWNlKDAsIC0yKSxcbiAgKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVmFsdWVJbkFzdEFycmF5KFxuICByZWNvcmRlcjogVXBkYXRlUmVjb3JkZXIsXG4gIG5vZGU6IEpzb25Bc3RBcnJheSxcbiAgdmFsdWU6IEpzb25WYWx1ZSxcbiAgaW5kZW50ID0gNCxcbikge1xuICBjb25zdCBpbmRlbnRTdHIgPSAnXFxuJyArIG5ldyBBcnJheShpbmRlbnQgKyAxKS5qb2luKCcgJyk7XG5cbiAgaWYgKG5vZGUuZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgIC8vIEluc2VydCBjb21tYS5cbiAgICBjb25zdCBsYXN0ID0gbm9kZS5lbGVtZW50c1tub2RlLmVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIHJlY29yZGVyLmluc2VydFJpZ2h0KGxhc3Quc3RhcnQub2Zmc2V0ICsgbGFzdC50ZXh0LnJlcGxhY2UoL1xccyskLywgJycpLmxlbmd0aCwgJywnKTtcbiAgfVxuXG4gIHJlY29yZGVyLmluc2VydExlZnQoXG4gICAgbm9kZS5lbmQub2Zmc2V0IC0gMSxcbiAgICAnICAnXG4gICAgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMikucmVwbGFjZSgvXFxuL2csIGluZGVudFN0cilcbiAgICArIGluZGVudFN0ci5zbGljZSgwLCAtMiksXG4gICk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9wZXJ0eUluQXN0T2JqZWN0KFxuICBub2RlOiBKc29uQXN0T2JqZWN0LFxuICBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbik6IEpzb25Bc3ROb2RlIHwgbnVsbCB7XG4gIGxldCBtYXliZU5vZGU6IEpzb25Bc3ROb2RlIHwgbnVsbCA9IG51bGw7XG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2Ygbm9kZS5wcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnR5LmtleS52YWx1ZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIG1heWJlTm9kZSA9IHByb3BlcnR5LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXliZU5vZGU7XG59XG4iXX0=