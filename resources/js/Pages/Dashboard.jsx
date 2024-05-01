import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, usedFeatures }) {
    let $i = 1;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Feature
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Credits
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Additional Data
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedFeatures.data.map((usedFeature) => (
                                        <tr
                                            key={usedFeature.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <th className="px-6 py-4">
                                                {$i++}
                                            </th>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {usedFeature.feature.name}
                                            </th>
                                            <th className="px-6 py-4">
                                                {usedFeature.credits}
                                            </th>
                                            <th className="px-6 py-4">
                                                {usedFeature.created_at}
                                            </th>
                                            <th className="px-6 py-4">
                                                {JSON.stringify(
                                                    usedFeature.data
                                                )}
                                            </th>
                                        </tr>
                                    ))}
                                    {!usedFeatures.data.length && (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="text-center p-8"
                                            >
                                                You have not used any features
                                                yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination links={usedFeatures.meta.links} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
