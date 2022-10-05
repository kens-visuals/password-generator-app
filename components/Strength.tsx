import { passwordStrength } from 'check-password-strength';

// Interfaces
interface StrengthProps {
  password: string;
}

const customCheckValues: any = [
  {
    id: 0,
    value: 'Too weak',
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: 'Weak',
    minDiversity: 1,
    minLength: 6,
  },
  {
    id: 2,
    value: 'Medium',
    minDiversity: 2,
    minLength: 8,
  },
  {
    id: 3,
    value: 'Strong',
    minDiversity: 3,
    minLength: 10,
  },
];

const Strength = ({ password }: StrengthProps) => {
  const { value, length } = passwordStrength(password, customCheckValues);

  return (
    <div className="mb-4 flex items-center justify-between bg-primary p-3 md:p-6">
      <span className="text-body uppercase text-secondary">Strength</span>

      {length === 0 ? (
        <span className="grid h-7 items-center text-body uppercase text-secondary">
          N/A
        </span>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <span className="text-body uppercase text-secondary-light">
            {value}
          </span>

          <div className="flex items-center justify-between gap-2">
            <div
              className={`h-7 w-2.5 border-2 border-secondary-light 
            ${value === 'Too weak' && 'border-red bg-red'}
            ${value === 'Weak' && 'border-orange bg-orange'}
            ${value === 'Medium' && 'border-yellow bg-yellow'}
            ${value === 'Strong' && 'border-green bg-green'}`}
            ></div>
            <div
              className={`h-7 w-2.5 border-2 border-secondary-light 
            ${value === 'Weak' && 'border-orange bg-orange'}
            ${value === 'Medium' && 'border-yellow bg-yellow'}
            ${value === 'Strong' && 'border-green bg-green'}`}
            ></div>
            <div
              className={`h-7 w-2.5 border-2 border-secondary-light 
            ${value === 'Medium' && 'border-yellow bg-yellow'}
            ${value === 'Strong' && 'border-green bg-green'}`}
            ></div>
            <div
              className={`h-7 w-2.5 border-2 border-secondary-light 
            ${value === 'Strong' && 'border-green bg-green'}`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Strength;
