import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Feature({ feature, answer, children }) {
    const { auth } = usePage().props;

    const available_credits = auth.user.available_credits;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {feature.name}
                </h2>
            }
        >
            <Head title="Feature 1" />
            <div className="py-12">
                <div className="maxk-w-7xl mx-auto sm:px-6 lg:px-8">
                    {answer !== null && (
                        <div className="mb-3 py-3 px-5 rounded text-white bg-emerald-600 text-xl">
                            Result of Calculation : {answer}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        {available_credits !== null &&
                            feature.required_credits > available_credits && (
                                <div className="absolute left-0 top-0 right-0 bottom-0 z-20 flex flex-col items-center justify-center bg-white/70 gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                        />
                                    </svg>
                                    <div>
                                        You don't have enough credits for this
                                        feature. Go{" "}
                                        <Link
                                            href={route("credit.index")}
                                            className="underline hover:no-underline"
                                        >
                                            Buy more credits
                                        </Link>
                                    </div>
                                </div>
                            )}
                        <div className="p-8 text-gray-400 border-b pb-4">
                            <p>{feature.description}</p>
                            <p className="text-sm italic text-right">
                                Requires {feature.required_credits} credits
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
