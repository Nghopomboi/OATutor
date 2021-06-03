var hints = [{id: "threevar23a-h1", type: "hint", dependencies: [], title: "Setting Up", text: "Set up three equatinos in variable form to represent the situation $$(x=your$$ share, $$y=Sarah's$$ share, and $$z=your$$ other roommate's share). We have $$x+y+z=82$$, $$y=\\left(2\\right) x+\\left(0.1\\right)$$, and $$z=x+\\left(2.1\\right)$$", variabilization: {}}, {id: "threevar23a-h2", type: "hint", dependencies: ["threevar23a-h1"], title: "Simplifying to 1 Variable", text: "Plug in the expressions for y and z into $$x+y+z=82$$", variabilization: {}}, {id: "threevar23a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["19.95"], dependencies: ["threevar23a-h2"], title: "Solving for x", text: "Combine the x values and use algebra to solve for your share", variabilization: {}}, {id: "threevar23a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40"], dependencies: ["threevar23a-h3"], title: "Solving for y", text: "Plug in the value of x into $$y=\\left(2\\right) x+\\left(0.1\\right)$$ to solve for Sarah's share", variabilization: {}}, {id: "threevar23a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["22"], dependencies: ["threevar23a-h4"], title: "Solving for z", text: "Plug in the value of x into $$z=x+\\left(2.1\\right)$$ to solve for your other roommate's share", variabilization: {}}, ]; export {hints};