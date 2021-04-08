var hints = [{id: "other15a-h1", type: "hint", dependencies: [], title: "Substitute Variable", text: "Let's start by setting a variable y equal to x-3. Now we can substitute y into the equation and solve like a normal quadradic: $$y^2-\\left(4\\right)=0$$."}, {id: "other15a-h2", type: "hint", dependencies: ["other15a-h1"], title: "Factor", text: "Here, we can factor the quadratic as $$\\left(y+\\left(2\\right)\\right) \\left(y-\\left(2\\right)\\right)=0$$."}, {id: "other15a-h3", type: "hint", dependencies: ["other15a-h2"], title: "$$x-3=y$$", text: "Now, because we need to find the answer in terms of x, we need to substitute x-3 back in for y. So we must solve for $$x-3=2$$ and $$x-3=-2$$."}, {id: "other15a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["other15a-h3"], title: "Solve First Equation", text: "Solve $$x-3=2$$. What is x?"}, {id: "other15a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["other15a-h4"], title: "Solve Second Equation", text: "Solve $$x-3=-2$$. What is x?"}, {id: "other15a-h6", type: "hint", dependencies: ["other15a-h4", "other15a-h5"], title: "Final Answer", text: "So our final answer is $$x=5$$ and $$x=1$$."}, ]; export {hints};