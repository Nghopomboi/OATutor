var hints = [{id: "mixapp6a-h1", type: "hint", dependencies: [], title: "Simple Interest Formula", text: "The simple interest formula is $$I=Prt$$, where I is interest, P is principal, r is interest rate, and t is time."}, {id: "mixapp6a-h2", type: "hint", dependencies: ["mixapp6a-h1"], title: "Value for t", text: "Since we are only concerned about interest, $$t=1$$"}, {id: "mixapp6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["14000-x"], dependencies: ["mixapp6a-h2"], title: "Assigning variables", text: "Let $$x=the$$ amount of dollars invested in the 4% account. Given that Remy has $14,000 total, how can we write a mathematical expression for the amount of dollars she should invest in the 7% account?"}, {id: "mixapp6a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.04*x"], dependencies: ["mixapp6a-h3"], title: "Expressing the interest earned for the 4% account", text: "How much interest will the 4% account earn in 1 year? Write as a mathematical expression."}, {id: "mixapp6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.07*(14000-x)"], dependencies: ["mixapp6a-h4"], title: "Expressing the interest earned for the 7% account", text: "How much interest will the 7% account earn in 1 year? Express this as a mathematical expression"}, {id: "mixapp6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.061*14000"], dependencies: ["mixapp6a-h5"], title: "Total interest", text: "What is the total interest earned given that Remy wants to earn 6.1% interest on the total amount?"}, ]; export {hints};