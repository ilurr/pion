const observer = new IntersectionObserver((entries) =>
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      let integerCount = 0;
      let decimalCount = 0;

      const [integerTarget, decimalTarget] = target.dataset.target.split('.');
      const integerDigits = integerTarget.toString().length;
      const decimalDigits = (decimalTarget || '').toString().length;
      const integerIntervalDuration = Math.min(2500 / integerDigits, 10);
      const decimalIntervalDuration = Math.min(2500 / decimalDigits, 10);
			console.log(integerIntervalDuration)

			
      target.classList.add("in-view");
			
      const updateCount = () => {
				if (integerCount < integerTarget) {
          integerCount = Math.min(integerCount + Math.ceil(integerTarget / (2500 / integerIntervalDuration)), integerTarget);
        }
        if (decimalTarget && decimalCount < decimalTarget) {
          decimalCount = Math.min(decimalCount + Math.ceil(decimalTarget / (2500 / decimalIntervalDuration)), decimalTarget);
        }
				
        // const displayIntegerCount = integerCount.toLocaleString().padStart(integerDigits, " ");
        const displayIntegerCount = integerCount;
        let displayDecimalCount = decimalCount.toString().padEnd(decimalDigits, '0');
        target.textContent = decimalDigits ? `${displayIntegerCount}.${displayDecimalCount}` : `${displayIntegerCount}`;

        if (integerCount >= integerTarget && (!decimalTarget || decimalCount >= decimalTarget)) {
          clearInterval(integerInterval);
          clearInterval(decimalInterval);
        }
      };

      const integerInterval = setInterval(updateCount, integerIntervalDuration);
      let decimalInterval; // Declare the variable outside the if block
      if (decimalTarget) {
        decimalInterval = setInterval(updateCount, decimalIntervalDuration); // Assign the interval within the if block
      }
    }
  })
);

const elements = document.querySelectorAll(".stat-count");
elements.forEach(element => 
observer.observe(element));
