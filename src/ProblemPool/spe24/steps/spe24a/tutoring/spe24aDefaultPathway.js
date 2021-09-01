var hints = [{id: "spe24a-h1", type: "hint", dependencies: [], title: "Subtraction Binomial Square Formula", text: "We compare our expression to the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2-\\left(2\\right) a b+b^2$$.", variabilization: {}}, {id: "spe24a-h2", type: "hint", dependencies: ["spe24a-h1"], title: "Compare the Binomial", text: "$${\\left(a-b\\right)}^2$$ $${\\left(\\left(4\\right) y^3-\\left(2\\right)\\right)}^2$$", variabilization: {}}, {id: "spe24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(4\\right) y^3$$"], dependencies: ["spe24a-h2"], title: "Identify a", text: "What is a in the expression?", variabilization: {}}, {id: "spe24a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["spe24a-h3"], title: "Identify b", text: "What is b in the expression?", variabilization: {}}, {id: "spe24a-h5", type: "hint", dependencies: ["spe24a-h3", "spe24a-h4"], title: "Plug in the Terms", text: "Substitute $$a=\\left(4\\right) y^3$$ and $$b=2$$ into the subtraction binomial square formula: $${\\left(a-b\\right)}^2=a^2+\\left(2\\right) a b+b^2$$ $${\\left(\\left(4\\right) y^3-\\left(2\\right)\\right)}^2={\\left(\\left(4\\right) y^3\\right)}^2-\\left(2\\right) \\left(4\\right) y^3 \\left(2\\right)+{\\left(2\\right)}^2$$", variabilization: {}}, {id: "spe24a-h6", type: "hint", dependencies: ["spe24a-h5"], title: "Simplify", text: "$$\\left(16\\right) y^6-\\left(16\\right) y^3+\\left(4\\right)$$", variabilization: {}}, ]; export {hints};