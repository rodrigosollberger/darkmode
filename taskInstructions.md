GOAL: In this exercise, we will implement user preferences with 2 adjustable settings:

Dark Mode

Increase Font Size

We will add 2 new pieces of state for the settings and we will implement the click handlers to toggle these pieces of state from true to false (and back again!)

Write your code in the 2 files:

/src/App.js file.

/src/Header.js file.

- Dark Mode

1. Initialize a new piece of state darkMode and setDarkMode. The value and setter will be used in the Header component, but the value will be used in the App component.

In which component should we initialize state?

Since the state will be used in both App and Header, the state should live in the highest level of the two components.

Place the state in the App component.

2. Since we initialized state in our App, we need access to it in Header.

How does a component give a child component access to a variable/state?

Pass it down as props!

In App

<Header darkMode={darkMode} setDarkMode={setDarkMode} />

Then how do we access this variable/state in the child component Header?
We destructure it from props
export function Header({darkMode, setDarkMode}) {
// other component stuff
}

3. In the Header component, add an onClick property to the first button, and when the button is clicked, call the setDarkMode to the opposite of what it is now.
   How do we set it to the opposite of its current value?

We use the ! operator

Click Handler: onClick={() => setDarkMode(!darkMode)}

4. On the same button, instead of the simple text dark_mode, conditionally render light_mode if darkMode is true, and dark_mode if it’s false (yes that is correct, we want the opposite icon to show! That’s good UX: This button will switch TO dark mode if we’re currently in light mode).
5. In the App component, on the #app div, edit the className to conditionally show dark if darkMode state is true, and light if darkMode is false.
6. Run the code. Clicking the moon button should toggle dark mode styling
7. Run the tests. This should PASS one test.

Larger Text

The steps for this are almost the same as the above, with these changes

- We’ll use a different piece of state and a different button.
- The toggle button won’t change icon.
- We are changing an inline style instead of a className on the #app.

1. Initialize a new piece of state largeFont and setLargeFont. This state should live in the same spot in App like darkMode does, and it’s also initialized with a starting value of false.

2. Pass these 2 down as props to Header and destructure them from props inside Header, as was done with darkMode.

3. Attach an event handler function to the onClick property of the button with the Material Icons text text_fields, setting largeFont to the opposite of what it currently is, just like we did with darkMode.

4. The Different Part: On the #app div, add a style property. Conditionally add fontSize: ‘24px’ if largeFont is true, and ’16px’ if not. Remember to use “double curly braces” to pass the style object.

How do we add in-line styles in React?
style={{fontSize: largeFont ? '24px' : '16px'}}

5. Run your code. Clicking the Tt button should toggle large text in the header and main sections

6. Run the tests. This should PASS both tests (2 total)
