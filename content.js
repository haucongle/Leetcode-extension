const hidePremiumQuestions = () => {
	const questionRows = document.querySelectorAll('div[role="row"]')

  questionRows.forEach((row) => {
    const questionCells = row.querySelectorAll('div[role="cell"]')
    if (questionCells && questionCells.length > 0) {
      // hide premium questions
      const statusEle = questionCells[0]
      if (statusEle) {
        if (statusEle.children.length === 0 || statusEle.querySelector('a') || statusEle.querySelector('span')) {
          row.style.display = 'flex'
        } else {
          row.style.display = 'none'
        }
      }
      // coloring rows
      const difficulty = questionCells[4].textContent.trim()
      if (difficulty === 'Easy') {
				row.style.color = '#00b8a3'
			}
			if (difficulty === 'Medium') {
				row.style.color = '#ffc01e'
			}
			if (difficulty === 'Hard') {
				row.style.color = '#ff375f'
			}
    }
	})
}

// Run the function when the page loads
hidePremiumQuestions()

// Use a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(hidePremiumQuestions)
observer.observe(document.body, { childList: true, subtree: true })
