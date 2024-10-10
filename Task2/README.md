## Task 2: Transaction Entry Form (Frontend: Next.js)

### Description

This task involves creating a user interface for entering gas station transactions. The form includes various fields for transaction details and implements validation and error handling.

### Features

- Form for entering gas station transaction details
- Date and time picker for transaction timestamp
- Dropdown selection for pump number
- Input validation and error messaging
- Success confirmation on valid form submission

### Form Fields

1. **Transaction Time**: DateTime (with date-time picker UI)
2. **Quantity**: Number (liters of fuel)
3. **Pump Number**: String (select dropdown)
4. **Revenue**: Number (total transaction amount)
5. **Unit Price**: Number (price per liter)

### Implementation Details

- **Framework**: Next.js
- **Form Handling**: react-hook-form
- **Validation**: Yup schema validation
- **UI Components**: Custom components with Tailwind CSS

### Technical Requirements

- Implement all form fields as specified
- Use react-hook-form for form state management
- Implement Yup schema validation for all fields
- Display appropriate error messages for invalid inputs
- Show success message on valid form submission
- Ensure responsive design for various screen sizes

### Code Structure

- `src/components/form/`: Contains form-related components
- `src/schemas/`: Yup validation schemas
- `src/pages/task2.tsx`: Main page component for the form

### Key Dependencies

#### Form and Validation

- react-hook-form (v7.53.0): Efficient form state management
- @hookform/resolvers (v3.9.0): Integrates Yup with react-hook-form
- yup (v1.4.0): Schema validation library

#### UI Components and Styling

- class-variance-authority (v0.7.0): Utility for creating variant classes
- clsx (v2.1.1): Utility for constructing className strings
- tailwind-merge (v2.5.3): Utility for merging Tailwind CSS classes
- tailwindcss-animate (v1.0.7): Animation utilities for Tailwind CSS
- lucide-react (v0.451.0): Icon library

#### Date and Time Handling

- date-fns (v4.1.0): Modern JavaScript date utility library
- react-datepicker (v7.4.0): Flexible datepicker component
- react-day-picker (v9.1.3): Flexible date picker component

#### Notifications

- sonner (v1.5.0): Toast notification library

#### Core Framework and Runtime

- next (v14.2.14): React framework for building the application
- react (v18) & react-dom (v18): Core libraries for building the UI

#### Development Tools

- typescript (v5): For adding static type definitions
- tailwindcss (v3.4.1): Utility-first CSS framework for styling
- postcss (v8): Tool for transforming CSS with JavaScript

### Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

### Component Structure

- `Form`: Main form component
- `FormField`: Reusable form field wrapper
- `Input`: Custom input component
- `Select`: Custom select component using Radix UI
- `DateTimePicker`: Custom date and time picker component

### Styling

- Utilizes Tailwind CSS for utility-first styling
- Custom components are built with accessibility in mind using Radix UI primitives

### Additional Notes

- The project uses a combination of custom components and Radix UI primitives for a balance of customization and accessibility
- Tailwind CSS is used extensively for styling, providing a utility-first approach
- The form leverages react-hook-form for efficient state management and Yup for robust validation
- Date and time handling is managed through a combination of date-fns, react-datepicker, and react-day-picker for flexibility
- Toast notifications are implemented using the sonner library for user feedback

### Usage

1. Navigate to the Task 2 page
2. Fill in the transaction details in the form
3. Submit the form
4. Observe validation feedback (errors or success message)

### Additional Notes

- Ensure all form fields are properly validated before submission
- The UI should be user-friendly and intuitive
- Consider adding features like auto-calculation of revenue based on quantity and unit price
