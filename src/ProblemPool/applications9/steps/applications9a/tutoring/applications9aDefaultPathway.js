var hints = [{id: "applications9a-h1", type: "hint", dependencies: [], title: "Supplementary", text: "When two angles are supplementary, it means their measures add up to 180 degrees.", variabilization: {}}, {id: "applications9a-h2", type: "hint", dependencies: ["applications9a-h1"], title: "First equation", text: "Since the problem identifies the angles as supplementary, we know that they add up to 180 degrees. Therefore, the first equation should be $$a+b=180$$.", variabilization: {}}, {id: "applications9a-h3", type: "hint", dependencies: ["applications9a-h2"], title: "Second equation", text: "The problem mentions the difference between the two angles is 70 degrees. Because of this, we can write the second equation as $$a-b=70$$.", variabilization: {}}, {id: "applications9a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["125"], dependencies: ["applications9a-h3"], title: "Solve", text: "Next, using the system of equations just created, solve for a. What does it equal?", variabilization: {}}, {id: "applications9a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["55"], dependencies: ["applications9a-h4"], title: "Solve", text: "What does t equal?", variabilization: {}}, {id: "applications9a-h6", type: "hint", dependencies: ["applications9a-h5"], title: "Answer", text: "The two angle measures are 125 degrees and 55 degrees.", variabilization: {}}, ]; export {hints};