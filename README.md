# Rustin-Ipsum
A Rust Cohle lorem ipsum generator inspired by True Detective Season 1

This is my very first side project: a very basic filler text generator.

Select the number of paragraphs you'd like, and press the generate button to get filler
 text directly from the HBO series True Detective.

I built an array filled with 19 memorable Rust Cohle quotes, and wrote a function 
that randomly sorts the array, and loops through the array as many times as specified by the
"paragraphs" dropdown menu.

Then it executes a loop for each paragraph, including up to 3 array elements (quotes) or as many
as it takes to reach 300 characters. After completing these loops, it repopulates the array by
splitting "output" into a "repop" array and looping it to push back into the original array. This
way the user can keep pushing generate without exhausting the quote bank.
