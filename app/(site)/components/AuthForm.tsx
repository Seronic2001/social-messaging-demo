'use client';

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Inputs from "@/app/components/Inputs/Inputs";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";

import {BsGithub} from "react-icons/bs";
import {BsGoogle} from "react-icons/bs";

type variant = 'Login' | 'Register';

const AuthForm = () => {
    const[variant, setVariant] = useState<variant>('Login');
    const[isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'Login') {
            setVariant('Register');
        }
        else {
            setVariant('Login');
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'Login') {
            // Login
        }

        if(variant === 'Register') {
            // Register
        }
    };

    const socialAction = (action : string) => {
        setIsLoading(true);

    };

    return (
        <div
        className="
            mt-8
            sm:mx-auto
            sm:w-full   
            sm:max-w-md
        "
        > 
            <div
            className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            "
            >
                <form
                className="
                    space-y-6
                "   
                onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'Register' && (
                    <Inputs id="name" label="Name" register={register} errors={errors}/>
                    )}
                    <Inputs id="email" label="Email address" type="email" register={register} errors={errors}/>
                    <Inputs id="password" label="Password" type="password" register={register} errors={errors}/>
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant === 'Login' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className ="relative">
                        <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                        "   
                        >
                            <div className="w-full border-t border-gray-300"/>

                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton
                                icon={BsGithub}
                                onclick={() => socialAction('github')}
                            />
                            <AuthSocialButton
                                icon={BsGoogle}
                                onclick={() => socialAction('google')}
                            />
                        </div>
                    </div>
                        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                            <div>
                                {variant === 'Login' ? "New to Messenger?" : "Already have an account?"}
                            </div>
                            <div onClick={toggleVariant}
                                className="underline cursor-pointer"
                            >
                                {variant === 'Login' ? "Create an account" : "Sign in"}
                            </div>
                        </div>
            </div>
        </div>
    )   
}

export default AuthForm;