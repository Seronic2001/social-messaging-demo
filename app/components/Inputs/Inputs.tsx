'use client';

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form";

interface InputsProps {
    id: string;
    label: string
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    disabled?: boolean;
}

const Inputs : React.FC<InputsProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div className="mt-1" >
            <label
            htmlFor={id}
            className="
                block
                text-sm
                font-medium
                text-gray-700
            "
            >
                {label}
            </label>
            <div className="mt-2">
              <input 
              id={id}
              type={type}
              autoComplete={id}
              disabled={disabled}
              {...register(id, { required })}
              className={clsx(`
                form-input
                block
                w-full
                rounded-md
                py-1.5
                text-gray-900
                border-0
                shadow-sm
                ring-1
                ring-insert
                ring-gray-300
                placeholder-gray-400
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
                sm:text-sm
                sm-leading-6
                `, errors[id] && "focus:ring-rose-500",
                disabled && "opacity-50 cursor-default"
              )}
               />
            </div>
        </div>
    )   
}

export default Inputs;