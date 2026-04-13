# 📋 **SPORT WALES DESIGN LIBRARY COMPONENT CREATION GUIDE**
*Complete Guide for New Team Members*

---

## 🎯 **What You'll Learn**

This guide will teach you how to add new components to the Sport Wales Design Library. You'll understand:
- How our website works (the technical bits explained simply)
- How to copy and modify existing components
- How to test your work
- How to deploy your changes live

**Time needed**: 30-60 minutes per component  
**Skill level**: Beginner friendly - we'll explain everything!

---

## 📚 **PART 1: Understanding Our Website System**

### **🏗️ How Our Website Works**

Think of our website like a factory that turns **source files** into **web pages**:

```
📁 Source Files (src/) → 🏭 Build Process → 🌐 Website (dist/)
     (.njk files)                            (.html files)
```

**Key Concepts:**

1. **Nunjucks (.njk files)**: These are "template" files that contain the structure and content
2. **Build Process**: When you run `npm start`, it converts .njk files into .html files
3. **Design Library**: A special section showcasing our reusable components

### **🗂️ File Structure Overview**

```
digital-team-site/
├── src/                          ← Source files (where you work)
│   ├── design-library/           ← Design library components
│   │   ├── button.njk           ← Button component (template to copy)
│   │   ├── card.njk             ← Card component
│   │   └── [your-new].njk       ← Your new component will go here
│   ├── design-library-base.njk   ← Navigation sidebar (you'll edit this)
│   └── includes/nav.njk          ← Main site navigation
├── app/
│   ├── app.js                    ← Register new pages here
│   └── page.js                   ← Builds .njk into .html
└── dist/                         ← Generated website (don't edit directly)
    └── design-library/           ← Your components become .html files here
        ├── button.html
        └── card.html
```

### **🔗 How Navigation Works**

There are **TWO navigation systems**:

1. **Main Site Navigation** (`src/includes/nav.njk`):
   - The top menu bar on every page
   - Contains "Resources" dropdown with "SW Design Library" link
   - Links to the design library start page

2. **Design Library Navigation** (`src/design-library-base.njk`):
   - The left sidebar when you're inside the design library
   - Shows all component categories and individual components
   - Highlights which component you're currently viewing

---

## 🛠️ **PART 2: Setting Up Your Workspace**

### **📋 Prerequisites**

Before you start, make sure you have:
- Access to the project folder
- Basic text editor (VS Code recommended)
- Command line/terminal access

### **🚀 Testing Your Setup**

1. **Open your terminal/command prompt**
2. **Navigate to the project folder**:
   ```bash
   cd path/to/digital-team-site
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Open your browser** to `http://localhost:3000`
5. **Navigate to**: Resources → SW Design Library

You should see the design library with Button and Card components. If this works, you're ready to create new components!

---

## 📝 **PART 3: Creating a New Component (Step-by-Step)**

We'll use the **Button component as our template** because it has all the structure we need.

### **Step 1: Choose Your Component Details**

First, decide on:
- **Component name**: What you'll call it (e.g., "Text Input", "Navigation", "Modal")
- **URL-safe name**: For file names (e.g., "text-input", "navigation", "modal")
- **Component category**: Which section in the sidebar it belongs to

**Example**: Let's create a "Text Input" component
- **Component name**: `Text Input`
- **URL-safe name**: `text-input`
- **Category**: `Input & Form Components`

### **Step 2: Copy the Button Template**

1. **Navigate to the design library folder**:
   ```bash
   cd src/design-library/
   ```

2. **Copy the button component**:
   ```bash
   # Windows
   copy button.njk text-input.njk
   
   # Mac/Linux  
   cp button.njk text-input.njk
   ```

**Why we do this**: The button component has all the correct structure - navigation setup, React code tabs, syntax highlighting, and proper documentation layout. Rather than starting from scratch, we copy this proven template and modify it.

### **Step 3: Update Component Metadata**

Open your new file (`text-input.njk`) in your text editor and make these changes:

**Change 1 - Update the active page**:
```njk
{% extends "design-library-base.njk" %}
{% set activePage = 'text-input' %}  ← CHANGE THIS (was 'button')
```

**Why**: This tells the navigation which item to highlight as "active" when viewing your component.

**Change 2 - Update the page title**:
```html
<h1 class="text-4xl font-bold text-gray-900 mb-8">Text Input</h1>
```

**Why**: This is the main heading users will see at the top of your component page.

### **Step 4: Replace Component Examples**

**Find the live component examples** (around lines 15-20):
```html
<!-- Replace this button example -->
<button class="inline-flex items-center justify-center h-12 px-6 text-white font-bold rounded-lg...">
    Save and continue
</button>

<!-- With your component example -->
<input type="text" 
       placeholder="Enter your name" 
       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
       style="font-family: 'Montserrat', sans-serif;">
```

**Why**: Users need to see your actual component in action, not a button.

### **Step 5: Update Documentation Content**

**Replace "When to use this component" section** (around line 35):
```html
<p class="text-gray-700 leading-relaxed mb-4">
    Use text input fields when you need users to enter short, single-line text information like names, email addresses, or search terms in Sport Wales services.
</p>
```

**Replace "How it works" guidelines** (around line 45):
```html
<ul class="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed mb-6">
    <li>Use clear, descriptive labels above each input field</li>
    <li>Include placeholder text to show expected format</li>
    <li>Ensure adequate padding for touch devices (minimum 44px height)</li>
    <li>Use Sport Wales brand colors for focus states (#164B64)</li>
    <li>Include proper error handling and validation messages</li>
    <li>Make inputs accessible with proper ARIA labels</li>
    <li>Use consistent spacing and typography across forms</li>
    <li>Consider input length - match field size to expected content</li>
    <li>Use Montserrat font family for consistency</li>
    <li>Include visual focus indicators for keyboard navigation</li>
    <li>Test input fields across different devices and browsers</li>
    <li>Follow responsive design principles for mobile compatibility</li>
</ul>
```

**Replace "Interactive Features" section** (around line 60):
```html
<ul class="space-y-2 text-gray-700 leading-relaxed">
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Focus states with Sport Wales blue ring for better accessibility</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Placeholder text disappears on focus for clear input area</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Responsive design adapts to different screen sizes</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Clear visual hierarchy with consistent spacing</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Keyboard navigation support for accessibility</span>
    </li>
    <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <span>Error state styling for validation feedback</span>
    </li>
</ul>
```

**Why**: This documentation helps other team members understand when and how to use your component correctly.

### **Step 6: Create Component Variants**

Most components have different variations. Replace the button variants with your component variants.

**Example - Replace the "Default buttons" section** (around line 80):
```html
<section class="mb-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Text Input with Label</h2>
    <p class="text-gray-700 leading-relaxed mb-6">
        Use labeled text inputs for forms where users need clear guidance about what information to provide.
    </p>
    
    <div class="border border-gray-300 rounded-lg mb-8">
        <div class="p-6 bg-gray-50">
            <!-- Your component variant example -->
            <div class="max-w-md">
                <label for="email-input" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" 
                       id="email-input"
                       placeholder="Enter your email" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                       style="font-family: 'Montserrat', sans-serif;">
            </div>
        </div>
        
        <div class="border-t border-gray-200">
            <div id="component2-code-tabs"></div>
        </div>
    </div>
</section>
```

**Continue this pattern** for component3, component4, etc. Each variant should have:
- A descriptive heading
- Explanation of when to use it
- Live example in the gray box
- Code tabs with `id="componentX-code-tabs"`

### **Step 7: Update Code Examples**

This is the most technical part. Find the `componentData` object (around line 300) and replace it:

```javascript
const componentData = {
    codeExamples: {
        component1: {
            html: `<!-- Basic Text Input -->
<input type="text" 
       placeholder="Enter your name" 
       class="sw-text-input-basic"
       aria-label="Name input">`,
       
            css: `.sw-text-input-basic {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    background-color: white;
    transition: all 0.3s ease;
}

.sw-text-input-basic:focus {
    outline: none;
    ring: 2px solid #164B64;
    border-color: #164B64;
}`,
            
            react: `function TextInput({ placeholder, value, onChange, ariaLabel }) {
    return (
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="sw-text-input-basic"
            aria-label={ariaLabel}
        />
    );
}`,
            
            tailwind: `<input type="text" 
       placeholder="Enter your name"
       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
       aria-label="Name input"
       style="font-family: 'Montserrat', sans-serif;">`
        },
        
        component2: {
            html: `<!-- Text Input with Label -->
<div class="sw-input-group">
    <label for="email" class="sw-input-label">Email Address</label>
    <input type="email" 
           id="email"
           placeholder="Enter your email" 
           class="sw-text-input-labeled">
</div>`,
           
            css: `.sw-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sw-input-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
}

.sw-text-input-labeled {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
}`,
            
            react: `function LabeledTextInput({ label, placeholder, type = "text", id }) {
    return (
        <div className="sw-input-group">
            <label htmlFor={id} className="sw-input-label">
                {label}
            </label>
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                className="sw-text-input-labeled"
            />
        </div>
    );
}`,
            
            tailwind: `<div class="flex flex-col gap-2">
    <label for="email" class="text-sm font-medium text-gray-700" style="font-family: 'Montserrat', sans-serif;">
        Email Address
    </label>
    <input type="email" 
           id="email"
           placeholder="Enter your email"
           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
           style="font-family: 'Montserrat', sans-serif;">
</div>`
        }
    }
};
```

**Update the React render calls** (around line 600):
```javascript
// Component 1 - Basic Text Input
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component1} tabId="component1" />,
    document.getElementById('component1-code-tabs')
);

// Component 2 - Text Input with Label
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component2} tabId="component2" />,
    document.getElementById('component2-code-tabs')
);
```

**Why**: These code examples let developers copy and paste working code into their projects.

### **Step 8: Update Sport Wales Guidelines**

Replace the button guidelines with component-specific ones (around line 650):

```html
<section class="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
    <h2 class="text-2xl font-bold text-blue-900 mb-4">Sport Wales Guidelines</h2>
    <ul class="list-disc ml-6 space-y-2 text-blue-800 leading-relaxed">
        <li>Text inputs should have minimum 44px height for touch accessibility</li>
        <li>Use Sport Wales blue (#164B64) for focus rings and active states</li>
        <li>Include clear, descriptive labels positioned above input fields</li>
        <li>Provide helpful placeholder text that shows expected format</li>
        <li>Use consistent border radius of 8px to match other form elements</li>
        <li>Maintain adequate padding (12-16px) for comfortable text entry</li>
        <li>Include error states with clear validation messaging</li>
        <li>Use Montserrat font family for all text input typography</li>
        <li>Test across devices to ensure responsive behavior</li>
        <li>Follow WCAG guidelines for accessibility compliance</li>
    </ul>
</section>
```

---

## 🔗 **PART 4: Adding Your Component to Navigation**

Your component needs to appear in the navigation so users can find it.

### **Step 1: Register in Build System**

Open `app/app.js` and add your component to the pages array:

**Find this section** (around line 25):
```javascript
const pages = [
    new Page('index', 'Home'),
    new Page('principles', 'Principles'),
    // ... other pages ...
    new Page('design-library/button', 'Button - SW Design Library'),
    new Page('design-library/card', 'Card - SW Design Library'),
    // ADD YOUR COMPONENT HERE:
    new Page('design-library/text-input', 'Text Input - SW Design Library'),
]
```

**Why**: This tells the build system to create an HTML file from your .njk file.

### **Step 2: Add to Design Library Navigation**

Open `src/design-library-base.njk` and find the appropriate section.

**For a text input, find "Input & Form Components"** (around line 85):
```html
<!-- 3. Input & Form Components -->
{% call navGroup('Input & Form Components') %}
    {{ navItem('Text Input', 'text-input.html', 'text-input') }}
    {{ navItem('Character Count', '../character-count.html', 'character-count') }}
    {{ navItem('Checkboxes', '../checkboxes.html', 'checkboxes') }}
    <!-- ... other items ... -->
{% endcall %}
```

**Add this line at the top** of the appropriate section:
```html
{{ navItem('Text Input', 'text-input.html', 'text-input') }}
```

**Parameters explained**:
- `'Text Input'`: Display name in navigation
- `'text-input.html'`: URL to your component page
- `'text-input'`: ID that matches your `activePage` variable

**Why**: This makes your component appear in the left navigation sidebar.

---

## ✅ **PART 5: Testing Your Component**

### **Step 1: Build and Test Locally**

1. **Save all files**
2. **Run the build process**:
   ```bash
   npm start
   ```
3. **Check for errors** in the terminal
4. **Open browser** to `http://localhost:3000`
5. **Navigate**: Resources → SW Design Library → Your Component

### **Step 2: Test Checklist**

Go through this checklist to make sure everything works:

- [ ] **Navigation highlighting**: Your component is highlighted in the left sidebar
- [ ] **Page title**: Shows your component name correctly
- [ ] **Live examples**: Your actual component displays (not buttons!)
- [ ] **Code tabs**: HTML/CSS/React/Tailwind tabs all work
- [ ] **Copy functionality**: "Copy code" button works in each tab
- [ ] **Syntax highlighting**: Code examples have proper coloring
- [ ] **Documentation**: All text describes your component (not buttons)
- [ ] **Responsive design**: Check on mobile/tablet sizes
- [ ] **Brand colors**: Uses Sport Wales colors properly

### **Step 3: Common Issues & Fixes**

**Problem**: Navigation doesn't highlight your component  
**Solution**: Check that `activePage` in your .njk file matches the ID in `design-library-base.njk`

**Problem**: Page shows 404 error  
**Solution**: Check that you added your component to `app/app.js` correctly

**Problem**: Code tabs don't work  
**Solution**: Check that your DOM element IDs match your ReactDOM.render calls

**Problem**: Still shows button examples  
**Solution**: Replace all button-related HTML with your component examples

**Problem**: Copy button doesn't work  
**Solution**: Check browser console for JavaScript errors

---

## 🚀 **PART 6: Making Your Component Live**

### **Step 1: Final Code Review**

Before publishing, review your component:

1. **Content accuracy**: All text describes your component correctly
2. **Code quality**: All code examples work and follow Sport Wales guidelines
3. **Accessibility**: Component includes proper ARIA labels and keyboard navigation
4. **Documentation**: Clear explanations of when and how to use the component
5. **Brand compliance**: Uses Sport Wales colors, fonts, and spacing

### **Step 2: Commit Your Changes**

Once everything is tested and working:

1. **Add your files**:
   ```bash
   git add src/design-library/your-component.njk
   git add app/app.js
   git add src/design-library-base.njk
   ```

2. **Commit with a clear message**:
   ```bash
   git commit -m "Add Text Input component to design library"
   ```

3. **Push to the repository**:
   ```bash
   git push origin main
   ```

**Why**: This saves your work and makes it available for the automated deployment system to publish.

---

## 🎯 **PART 7: Quick Reference**

### **🗂️ File Locations**
- **Component files**: `src/design-library/your-component.njk`
- **Navigation**: `src/design-library-base.njk`
- **Build registry**: `app/app.js`
- **Main nav**: `src/includes/nav.njk`

### **🔧 Key Variables to Change**
```njk
{% set activePage = 'your-component' %}  ← Navigation ID
```
```html
<h1>Your Component Name</h1>              ← Page title
<div id="component1-code-tabs"></div>     ← Code tab containers
```
```javascript
{{ navItem('Display Name', 'file.html', 'id') }}  ← Navigation item
new Page('design-library/file-name', 'Title')     ← Build registry
```

### **⚡ Commands**
```bash
npm start                    # Start development server
git add .                    # Stage all changes
git commit -m "message"      # Save changes
git push origin main         # Publish changes
```

---

## 💡 **Tips for Success**

### **🎨 Design Guidelines**
- Always use Sport Wales brand colors: `#164B64` (blue), `#E32434` (red)
- Include hover states: `#2E7799` (blue), `#C9202E` (red)
- Use Montserrat font family consistently
- Follow 8px border radius for consistency
- Ensure 44px minimum height for touch targets

### **📝 Writing Tips**
- Write clear, actionable guidelines
- Include both "do" and "don't" examples when helpful
- Test all code examples before publishing
- Use simple language that non-technical team members can understand

### **🔧 Technical Tips**
- Always copy from `button.njk` as your starting template
- Test your component in multiple browsers
- Check both desktop and mobile layouts
- Validate HTML and check for JavaScript errors
- Use the browser's developer tools to debug issues





#EXAMPLE

{% extends "design-library-base.njk" %}
{% set activePage = 'reuseable-component' %}

{% block componentContent %}
<div class="max-w-4xl mx-auto px-6 py-8">
    
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Reusable Component</h1>

    <!-- Primary Example Block -->
    <div class="border border-gray-300 rounded-lg mb-8">
    
        <!-- Live Example -->
        <div class="p-10 bg-gray-50">

          <!--  {Add component in here, Replace the button example} -->
          <button class="inline-flex items-center...">
            Save and continue
          </button>


        </div>
        
        <!-- React Code Tabs (DO NOT EDIT) -->
        <div class="border-t border-gray-200">
            <div id="component1-code-tabs"></div>
        </div>
    </div>

    <!-- When to use this component -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">When to use this component</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
            {Example}: Use the button component to help users carry out an action like starting an application 
            or saving their information in Sport Wales services.
        </p>
    </section>

    <!-- How it works -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">How it works</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
            {Example}: Write button text in sentence case, describing the action it performs. Follow these guidelines:
        </p>
        
        <ul class="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed mb-6">
            <li>Button height should be 46px according to Sport Wales brand guidelines</li>
            <li>Use rounded edges (8px border radius) for all buttons</li>
            <li>Write button text in sentence case, describing the action it performs</li>
            <li>Align the primary action button to the left edge of your form</li>
            <li>Primary blue button hover state changes to #2E7799</li>
            <li>Start/Warning red button hover state changes to #C9202E</li>
            <li>Secondary buttons use outlined style with Sport Wales blue border</li>
            <li>Use Montserrat font family for all button text</li>
            <li>Avoid using multiple primary buttons on a single page</li>
            <li>Use start buttons for main call to action on service start pages</li>
            <li>Use warning buttons sparingly for destructive actions only</li>
            <li>Pages with too many calls to action make it hard for users to know what to do next</li>
        </ul>
        

        <!-- Interactive Features (Optional)  -->
        <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Interactive Features</h3>
            <ul class="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed mb-6">
                <li>Button height should be 46px according to Sport Wales brand guidelines</li>
                <li>Use rounded edges (8px border radius) for all buttons</li>
                <li>Write button text in sentence case, describing the action it performs</li>
                <li>Align the primary action button to the left edge of your form</li>
                <li>Primary blue button hover state changes to #2E7799</li>
                <li>Start/Warning red button hover state changes to #C9202E</li>
                <li>Secondary buttons use outlined style with Sport Wales blue border</li>

            </ul>
        </div>

        <!-- Additional Information(Optional)  -->
        <p class="text-gray-700 leading-relaxed mb-4">
                Cards should present information clearly and consistently. Follow these guidelines for effective card design:
        </p>

    </section>

   
    <!-- Default Variants (Optional) -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Default buttons</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
            Use a default button for the main call to action on a page.
        </p>
        
        <p class="text-gray-700 leading-relaxed mb-8">
            Avoid using multiple default buttons on a single page. Having more than one main call to 
            action reduces their impact, and makes it harder for users to know what to do next.
        </p>

        <!-- Default Button Example -->
        <div class="border border-gray-300 rounded-lg mb-8">

            <div class="p-10 bg-gray-50">

                <!--  {Add variants component in here} -->

            </div>
            
            <!-- React Code Tabs (DO NOT EDIT) -->
            <div class="border-t border-gray-200">
                <div id="component2-code-tabs"></div>
            </div>

        </div>
    </section>

     <!-- Default Variants (Optional) -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Start buttons</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
            Use a start button for the main call to action on your service's start page.
        </p>
        
        <p class="text-gray-700 leading-relaxed mb-8">
            Start buttons do not usually submit form data, so use a link tag instead of a button tag.
        </p>

        <!-- Example Variants Componenet -->
        <div class="border border-gray-300 rounded-lg mb-8">

            <!-- Example of a Button -->
            <div class="p-10 bg-gray-50">
                <a href="#" class="inline-flex items-center justify-center h-12 px-6 text-white font-bold rounded-lg transition-colors duration-300" style="background-color: #E32434; font-family: 'Montserrat', sans-serif;" onmouseover="this.style.backgroundColor='#C9202E'" onmouseout="this.style.backgroundColor='#E32434'" onclick="void(0)">
                    Start now
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                </a>
            </div>
            
            <!-- React Code Tabs (DO NOT EDIT) -->
            <div class="border-t border-gray-200">
                <div id="component3-code-tabs"></div>
            </div>


        </div>


    </section>

    <!-- Secondary buttons -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Secondary buttons</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
            Use secondary buttons for secondary calls to action on a page.
        </p>
        
        <p class="text-gray-700 leading-relaxed mb-8">
            Pages with too many calls to action make it hard for users to know what to do next. 
            Before adding lots of secondary buttons, try to simplify the page or break the content 
            down across multiple pages.
        </p>

        <!-- Secondary Button Example -->
        <div class="border border-gray-300 rounded-lg mb-8">
            <div class="p-10 bg-gray-50">
                <button class="inline-flex items-center justify-center h-12 px-6 font-bold rounded-lg border-2 transition-all duration-300" style="color: #164B64; border-color: #164B64; background-color: transparent; font-family: 'Montserrat', sans-serif;" onmouseover="this.style.backgroundColor='#164B64'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#164B64'" onclick="void(0)">
                    Find address
                </button>
            </div>
            
            <div class="border-t border-gray-200">
                <div id="component4-code-tabs"></div>
            </div>
        </div>

        <p class="text-gray-700 leading-relaxed">
            You can also group default and secondary buttons together.
        </p>
    </section>

    <!-- Sport Wales Specific Guidelines -->
    <section class="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold text-blue-900 mb-4">Sport Wales Guidelines</h2>
        <ul class="list-disc ml-6 space-y-2 text-blue-800 leading-relaxed">
            <li>Button height should be 46px according to Sport Wales brand guidelines</li>
            <li>Use rounded edges (8px border radius) for all buttons</li>
            <li>Primary buttons use Sport Wales blue (#164B64) with hover state (#2E7799)</li>
            <li>Start buttons use Sport Wales red (#E32434) with hover state (#C9202E)</li>
            <li>Use Montserrat font family for all button text</li>
            <li>Write button text in sentence case, describing the action it performs</li>
            <li>Align the primary action button to the left edge of your form</li>
        </ul>
    </section>

</div>

<!-- Highlight.js for Syntax Highlighting -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/xml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/css.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/javascript.min.js"></script>

<!-- React CDN -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- Highlight.js CDN - Dark Theme -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/xml.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/css.min.js"></script>
<script>
// Initialise highlight.js when loaded
hljs.highlightAll();
</script>

<script type="text/babel">
{% raw %}
const { useState } = React;

// Code Tab Component for each section
function CodeTabsComponent({ codeExamples, tabId }) {
    const [codeType, setCodeType] = useState('html');

    // Language mapping for highlight.js
    const getLanguageClass = (type) => {
        const languageMap = {
            html: 'language-html',
            css: 'language-css', 
            react: 'language-jsx',
            tailwind: 'language-html' // HTML with Tailwind classes
        };
        return languageMap[type] || 'language-html';
    };

    // Re-highlight code when codeType changes
    React.useEffect(() => {
        // Wait for highlight.js to be loaded
        const highlightCode = () => {
            if (window.hljs) {
                // Small delay to ensure DOM is updated
                setTimeout(() => {
                    const codeBlock = document.querySelector(`#${tabId}-code-block`);
                    if (codeBlock) {
                        // Remove existing highlighting
                        codeBlock.removeAttribute('data-highlighted');
                        codeBlock.className = getLanguageClass(codeType);
                        // Re-highlight
                        window.hljs.highlightElement(codeBlock);
                    }
                }, 50);
            } else {
                // If hljs not loaded yet, try again in 100ms
                setTimeout(highlightCode, 100);
            }
        };
        
        highlightCode();
    }, [codeType, tabId]);

    return (
        <div>
            {/* Code Type Selector */}
            <div className="flex" role="tablist">
                {Object.keys(codeExamples).map((type, index) => (
                    <button
                        key={type}
                        onClick={() => setCodeType(type)}
                        className={`px-4 py-3 text-sm font-semibold border-b-3 transition-all ${
                            codeType === type
                                ? 'border-blue-600 bg-white text-blue-600'
                                : 'border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {type.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Code Display */}
            <div className="bg-white">
                <div className="relative">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(codeExamples[codeType]);
                            // Visual feedback
                            const button = event.target;
                            const originalText = button.textContent;
                            button.textContent = 'Copied!';
                            setTimeout(() => {
                                button.textContent = originalText;
                            }, 2000);
                        }}
                        className="absolute top-2 right-2 px-3 py-1 text-xs bg-gray-700 text-gray-200 hover:bg-gray-600 rounded transition-colors duration-300 border border-gray-600"
                    >
                        Copy code
                    </button>
                    <pre className="p-1 bg-gray-900 text-gray-100 rounded text-sm font-mono overflow-x-auto">
                        <code 
                            id={`${tabId}-code-block`}
                            className={getLanguageClass(codeType)}
                        >
                            {codeExamples[codeType]}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

// Main Component with all code examples
function ComponentInstructions() {
    const componentData = {
        codeExamples: {
            component1: {
                html: `
                
                `,
                css: `
                
                `,
                react: ``,
                tailwind: ``
            },
            component2: {
                html: ``,
                css: ``
                react: ``,
                tailwind: ``
            },
            component3: {
                html: ``,
                css: ``,
                react: ``,
                tailwind: ``
            }, 
        }
    };

    return componentData;
}

// Render all button components systematically
const componentData = ComponentInstructions();

// Component 1 - Primary Button
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component1} tabId="component1" />,
    document.getElementById('component1-code-tabs')
);

// Component 2 - Default Button
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component2} tabId="component2" />,
    document.getElementById('component2-code-tabs')
);

// Component 3 - Start Button
ReactDOM.render(
    <CodeTabsComponent codeExamples={componentData.codeExamples.component3} tabId="component3" />,
    document.getElementById('component3-code-tabs')
);

// Component 4 - Secondary Button
// ReactDOM.render(
//    <CodeTabsComponent codeExamples={componentData.codeExamples.component4} tabId="component4" />,
//    document.getElementById('component4-code-tabs')
// );


{% endraw %}
</script>

<!-- Initialise highlight.js when page loads -->
<script>
// Ensure highlight.js is ready
document.addEventListener('DOMContentLoaded', function() {
    if (window.hljs) {
        window.hljs.configure({
            languages: ['html', 'css', 'javascript', 'jsx']
        });
    }
});
</script>
{% endblock %}



#######

Sport Wales Design Library
Component Creation Guide
Creating Components for the Digital Team Site
 
Creating a New Component
We'll use the Default component as our template because it has all the structure we need to create a new component.  src/design-library/default.njk
Step 1: Choose Your Component Details
First, decide on:
•	Component name: What you'll call it (e.g., "Text Input", "Navigation", "Modal")
•	URL-safe name: For file names (e.g., "text-input", "navigation", "modal")
•	NJK file name: Important  - This .njk file name needs to match the app.js “New page”. Also match the  design-library-base Component navigation ID and .html when generated.  
•	Component category: Which section in the component sidebar (navigation) it belongs to

Example: Let's create a "Text Input" component

•	Component name: Text Input
•	URL-safe name: text-input
•	Category: Input & Form Components

Step 2: Copy the Default Template
1.	Navigate to the design library folder:
cd src/design-library/
2.	Copy the default component:
# Windows copy default.njk text-input.njk
Why we do this: The default component has all the correct structure - navigation setup, React code tabs, syntax highlighting, and proper documentation layout. Rather than starting from scratch, we copy this proven template and modify it.
Step 3: Update Component Metadata
Open your new file (text-input.njk) in your text editor and make these changes:
Change 1 - Update the active page:
{% extends "design-library-base.njk" %}
{% set activePage = 'text-input' %}  CHANGE THIS (was 'button')
Why: This tells the component navigation which item to highlight as "active" when viewing your component.
Change 2 - Update the page title:
<h1 class="text-4xl font-bold text-gray-900 mb-8">Text Input</h1>
Why: This is the main heading users will see at the top of your component page.
Step 4: Replace Component Examples
Find the live component examples (around lines 15-20):
Replace this button example:
<button class="inline-flex items-center...">
Save and continue
</button>
With your component example:
<input type="text" placeholder="Enter your name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" style="font-family: 'Montserrat', sans-serif;">
Why: Users need to see your actual component in action, not a button.
Step 5: Update Documentation Content
Replace "When to use this component" section (around line 35):
<p class="text-gray-700 leading-relaxed mb-4"> Use text input fields when you need users to enter short, single-line text information like names, email addresses, or search terms in Sport Wales services. </p>
Replace "How it works" guidelines (around line 45):
<ul class="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed mb-6">
<li>Use clear, descriptive labels above each input field</li>
<li>Include placeholder text to show expected format</li>
<li>Ensure adequate padding for touch devices (minimum 44px height)</li>
<li>Use Sport Wales brand colors for focus states (#164B64)</li>
<li>Include proper error handling and validation messages</li>
<li>Make inputs accessible with proper ARIA labels</li>
<li>Use consistent spacing and typography across forms</li>
<li>Consider input length - match field size to expected content</li>
<li>Use Montserrat font family for consistency</li>
<li>Include visual focus indicators for keyboard navigation</li>
<li>Test input fields across different devices and browsers</li> <li>Follow responsive design principles for mobile compatibility</li>
</ul>
Why: This documentation helps other team members understand when and how to use your component correctly.
Step 6: Create Component Variants
Most components have different variations. You can copy and paste the code below under the first section. For the code tab only update the number of the component in the text from “1” to “2”, “3” ect…   Example:  id="component1-code-tabs" ->  id="component2-code-tabs"
Example - Replace the "Default buttons" section (around line 80):
<!-- Default Variants (Optional) -->
    <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Default buttons</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
            Use a default button for the main call to action on a page.
        </p>
        
        <p class="text-gray-700 leading-relaxed mb-8">
            Avoid using multiple default buttons on a single page. Having more than one main call to 
            action reduces their impact, and makes it harder for users to know what to do next.
        </p>

        <!-- Default Button Example -->
        <div class="border border-gray-300 rounded-lg mb-8">

            <div class="p-10 bg-gray-50">

                <!--  {Add variants component in here} -->

            </div>
            
            <!-- React Code Tabs (DO NOT EDIT) -->
            <div class="border-t border-gray-200">
                <div id="component2-code-tabs"></div>
            </div>

        </div>
    </section>


Continue this pattern for component3, component4, etc. Each variant should have:
•	A descriptive heading
•	Explanation of when to use it
•	Live example in the gray box  <div class="border border-gray-300 rounded-lg mb-8">
•	Code tabs with id="componentX-code-tabs" 
Step 7: Update Code Examples
This is the most technical part. Find the componentData object below is an example of what it looks like. If you want to start with a clean code object can copy the empty object further underneath.  


const componentData = { 
codeExamples: { 
component1: { 
html: `<!-- Basic Text Input --> <input type="text" placeholder="Enter your name" class="sw-text-input-basic" aria-label="Name input">`,
css: `.sw-text-input-basic { width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-family: 'Montserrat', sans-serif; font-size: 16px; background-color: white; transition: all 0.3s ease; }
.sw-text-input-basic:focus { outline: none; ring: 2px solid #164B64; border-color: #164B64; }`,
react: `function TextInput({ placeholder, value, onChange, ariaLabel }) { return ( <input type="text" placeholder={placeholder} value={value} onChange={onChange} className="sw-text-input-basic" aria-label={ariaLabel} />
); }`,
tailwind: `<input type="text" placeholder="Enter your name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" aria-label="Name input" style="font-family: 'Montserrat', sans-serif;">` }
} 



// Main Component with all code examples
function ComponentInstructions() {
    const componentData = {
        codeExamples: {
            component1: {
                html: ``,
                css: ``,
                react: ``,
                tailwind: ``
            },
            component2: {
                html: ``,
                css: ``
                react: ``,
                tailwind: ``
            },
            component3: {
                html: ``,
                css: ``,
                react: ``,
                tailwind: ``
            }, 
        }
    };


Update the React render calls 

// Component 1 - Basic Text Input
ReactDOM.render( <CodeTabsComponent codeExamples={componentData.codeExamples.component1} tabId="component1" />, document.getElementById('component1-code-tabs') );
// Component 2 - Text Input with Label
ReactDOM.render( <CodeTabsComponent codeExamples={componentData.codeExamples.component2} tabId="component2" />, document.getElementById('component2-code-tabs') );
Why: These code examples let developers copy and paste working code into their projects. 
Adding Your Component to Navigation
Your component needs to appear in the navigation so users can find it.
Step 1: Register in Build System
Open app/app.js and add your component to the pages array:
Find this section (around line 25):
const pages = [ new Page('index', 'Home'), new Page('principles', 'Principles'), // ... other pages ... new Page('design-library/button', 'Button - SW Design Library'), new Page('design-library/card', 'Card - SW Design Library'), // ADD YOUR COMPONENT HERE:
new Page('design-library/text-input', 'Text Input - SW Design Library'),
]
Why: This tells the build system to create an HTML file from your .njk file.
Step 2: Add to Design Library Navigation
Open src/design-library-base.njk and find the appropriate section.
Parameters explained:
•	'Text Input': Display name in navigation
•	'text-input.html': URL to your component page
•	'text-input': ID that matches your activePage variable
For a text input, find "Input & Form Components" 

<!-- 3. Input & Form Components -->
{% call navGroup('Input & Form Components') %}
{{ navItem('Text Input', 'text-input.html', 'text-input') }}
{{ navItem('Character Count', '../character-count.html', 'character-count') }}
{{ navItem('Checkboxes', '../checkboxes.html', 'checkboxes') }}
<!-- ... other items ... -->
{% endcall %}
Add this line at the top of the appropriate section:
{{ navItem('Text Input', 'text-input.html', 'text-input') }}
Why: This makes your component appear in the left navigation sidebar. 
Test Check list
Go through this checklist to make sure everything works:
■ Navigation highlighting: Your component is highlighted in the left sidebar
■ Page title: Shows your component name correctly
■ Live examples: Your actual component displays (not buttons!)
■ Code tabs: HTML/CSS/React/Tailwind tabs all work
■ Copy functionality: "Copy code" button works in each tab
■ Syntax highlighting: Code examples have proper coloring
■ Documentation: All text describes your component (not buttons)
■ Responsive design: Check on mobile/tablet sizes ■ Brand colors: Uses Sport Wales colors properly
Commit your changes/component 
Once everything is tested and working:
1.	Add your files:
git add src/design-library/your-component.njk git add app/app.js
git add src/design-library-base.njk
2.	Commit with a clear message:
git commit -m "Add Text Input component to design library"
3.	Push to the repository:
git push origin main
Why: This saves your work and makes it available for the automated deployment system to publish.
 Quick Reference and Tips
File Locations
File Type	Location
Component files	src/design-library/your-component.njk
Navigation	src/design-library-base.njk
Build registry	app/app.js


Tips for Success
Design Guidelines
•	Always use Sport Wales brand colors: #164B64 (blue), #E32434 (red)
•	Include hover states: #2E7799 (blue), #C9202E (red)
•	Use Montserrat font family consistently
•	Follow 8px border radius for consistency
•	Ensure 44px minimum height for touch targets
Writing Tips
•	Write clear, actionable guidelines
•	Include both "do" and "don't" examples when helpful
•	Test all code examples before publishing
•	Use simple language that non-technical team members can understand

