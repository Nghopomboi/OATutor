var hints = [{id: "slope12a-h1", type: "hint", dependencies: [], title: "Solve for y", text: "Isolate y to one side: $$\\left(6\\right) x+\\left(4\\right) y=12$$", variabilization: {}}, {id: "slope12a-h2", type: "hint", dependencies: ["slope12a-h1"], title: "Solve for y", text: "Substract $$\\left(6\\right) x$$ from each side: $$\\left(4\\right) y=-\\left(6\\right) x+\\left(12\\right)$$", variabilization: {}}, {id: "slope12a-h3", type: "hint", dependencies: ["slope12a-h2"], title: "Solve for y", text: "Divide both sides by 4: $$\\frac{\\left(4\\right) y}{4}=\\frac{\\left(-\\left(6\\right) x+\\left(12\\right)\\right)}{4}$$", variabilization: {}}, {id: "slope12a-h4", type: "hint", dependencies: ["slope12a-h3"], title: "Solve for y", text: "Remember $$\\frac{a+b}{c}=\\frac{a}{c}+\\frac{b}{c}$$: $$\\frac{\\left(4\\right) y}{4}=\\frac{-\\left(6\\right) x}{4}+\\frac{12}{4}$$", variabilization: {}}, {id: "slope12a-h5", type: "hint", dependencies: ["slope12a-h4"], title: "Solve for y", text: "Simplify: $$y=\\left(-\\frac{3}{2}\\right) x+\\left(3\\right)$$", variabilization: {}}, {id: "slope12a-h6", type: "hint", dependencies: ["slope12a-h5"], title: "Slope-Intercept Form of an Equation of a Line", text: "We compare our equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=\\left(-\\frac{3}{2}\\right) x+\\left(3\\right)$$", variabilization: {}}, {id: "slope12a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(3\\right)}{2}$$"], dependencies: ["slope12a-h6"], title: "Identify the slope.", text: "What is m in our given equation?", variabilization: {}}, {id: "slope12a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["slope12a-h7"], title: "Identify b.", text: "What is b in our given equation?", variabilization: {}}, {id: "slope12a-h9", type: "hint", dependencies: ["slope12a-h8"], title: "Identify the y-intercept.", text: "The y-intercept is (0,b). Since b is 3, the y-intercept would be (0,3)", variabilization: {}}, {id: "slope12a-h10", type: "hint", dependencies: ["slope12a-h7", "slope12a-h9"], title: "Slope and y-intercept", text: "The slope is $$\\frac{-\\left(3\\right)}{2}$$ and the y-intercept is (0,3).", variabilization: {}}, ]; export {hints};