var hints = [{id: "logarithmic8a-h1", type: "hint", dependencies: [], title: "Product Rule for Logarithms", text: "The product rule for logarithms can be used to simplify a logarithm of a product by rewriting it as a sum of individual logarithms. \\n $$\\log_{b}(M N)$$ $$=$$ $$\\log_{b}(M)$$ + $$\\log_{b}(N)$$ for $$b>0$$ \\n \\n Given the logarithm of a product, use the product rule of logarithms to write an equivalent sum of logarithms. \\n \\n 1) Factor the argument completely, expressing each whole number factor as a product of primes. \\n 2) Write the equivalent expression by summing the logarithms of each factor.", variabilization: {}}, {id: "logarithmic8a-h2", type: "hint", dependencies: [], title: "Quotient Rule for Logarithms", text: "The quotient rule for logarithms can be used to simplify a logarithm or a quotient by rewriting it as the difference of individual logarithms. \\n $$\\log_{b}(\\frac{M}{N})$$ $$=$$ $$\\log_{b}(M)$$ - $$\\log_{b}(N)$$ \\n \\n Given the logarithm of a quotient, use the quotient rule of logarithms to write an equivalent difference of logarithms. \\n \\n 1) Express the argument in lowest terms by factoring the numerator and denominator and canceling common terms. \\n 2) Write the equivalent expression by subtracting the logarithm of the denominator from the logarithm of the numerator. \\n 3) Check to see that each term is fully expanded. If not, apply the product rule for logarithms to expand completely.", variabilization: {}}, {id: "logarithmic8a-h3", type: "hint", dependencies: [], title: "Power Rule for Logarithms", text: "The power rule for logarithms can be used to simplify the logarithm of a power by rewriting it as the product of the exponent times the logarithm of the base. \\n $$\\log_{b}(M^n)$$ $$=$$ $$n*\\log_{b}(M)$$ \\n \\n Given the logarithm of a power, use the power rule of logarithms to write an equivalent product of a factor and a logarithm. \\n \\n 1) Express the argument as a power, if needed. \\n 2) Write the equivalent expression by multiplying the exponent times the logarithm of the base.", variabilization: {}}, {id: "logarithmic8a-h4", type: "hint", dependencies: [], title: "Condensing Logarithmic Expressions", text: "Given a sum, difference, or product of logarithms with the same base, write an equivalent expression as a single logarithm. \\n \\n 1) Apply the power property first. Identify terms that are products of factors and a logarithm, and rewrite each as the logarithm of a power. \\n 2) Next apply the product property. Rewrite sums of logarithms as the logarithm of a product. \\n 3) Apply the quotient property last. Rewrite differences of logarithms as the logarithm of a quotient.", variabilization: {}}, {id: "logarithmic8a-h5", type: "hint", dependencies: ["logarithmic8a-h4"], title: "Apply the Power Rule for Logarithms", text: "Apply the power property first. Identify terms that are products of factors and a logarithm, and rewrite each as the logarithm of a power. What is the expression after applying the power rule.", variabilization: {}}, {id: "logarithmic8a-h6", type: "hint", dependencies: ["logarithmic8a-h5"], title: "Apply the Product Rule for Logarithms", text: "Rewrite sums of logarithms as the logarithm of a product. What is the expression?", variabilization: {}}, ]; export {hints};