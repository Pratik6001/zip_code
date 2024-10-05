import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsGrid({ data, val }: any) {
    const data2 = data[`${val}`]; // Adjust according to your data structure
    
    // Check if the data is empty or if the postal code is incorrect
    const isDataEmpty = !data2 || data2.length === 0;

    return (
        <div className="flex items-center text-gray-800">
            {isDataEmpty ? (
                <p className="text-4xl">Write something to see results.</p>
            ) : (
                <div className="p-4 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Location (Postal Code) */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <a
                                href={`https://www.google.com/search?q=${data2[0]?.city}&rlz=1C1VDKB_enIN1128IN1128&oq=${data2[0]?.city}&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQLhixAxiABDIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyBwgEEC4YgAQyDQgFEC4YrwEYxwEYgAQyDAgGEAAYQxiABBiKBTIQCAcQLhivARjHARiABBiOBTIQCAgQLhivARjHARiABBiOBTIHCAkQABiABNIBCDMyMjNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="flex flex-row p-4">
                                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                        {/* Location Icon */}
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 11c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm0 0V3m0 16v5m0-5a8 8 0 100-16 8 8 0 000 16z"
                                            />
                                        </svg>
                                    </div>
                                    <CardContent className="flex-grow ml-4">
                                        <div className="text-sm text-gray-500">Location</div>
                                        <div className="font-bold text-lg">{data2[0]?.city || "N/A"}</div>
                                    </CardContent>
                                </Card>
                            </a>
                        </div>

                        {/* State */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <a
                                href={`https://www.google.com/search?q=${data2[0]?.state}&rlz=1C1VDKB_enIN1128IN1128&oq=${data2[0]?.state}&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQLhixAxiABDIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyBwgEEC4YgAQyDQgFEC4YrwEYxwEYgAQyDAgGEAAYQxiABBiKBTIQCAcQLhivARjHARiABBiOBTIQCAgQLhivARjHARiABBiOBTIHCAkQABiABNIBCDMyMjNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="flex flex-row p-4">
                                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                                        {/* State Icon */}
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4M7 6h10l2 2v8l-2 2H7l-2-2V8l2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <CardContent className="flex-grow ml-4">
                                        <div className="text-sm text-gray-500">State</div>
                                        <div className="font-bold text-lg">{data2[0]?.state || "N/A"}</div>
                                    </CardContent>
                                </Card>
                            </a>
                        </div>

                        {/* Country */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <Card className="flex flex-row p-4">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                                    {/* Country Icon */}
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 0v5m0-5a10 10 0 015 2.9m-5 2.1a5 5 0 100 10m-5-8a5 5 0 015-5"
                                        />
                                    </svg>
                                </div>
                                <CardContent className="flex-grow ml-4">
                                    <div className="text-sm text-gray-500">Country</div>
                                    <div className="font-bold text-lg">{data2[0]?.country_code || "N/A"}</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Latitude */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <Card className="flex flex-row p-4">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                                    {/* Latitude Icon */}
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 2v20m0-20a10 10 0 110 20"
                                        />
                                    </svg>
                                </div>
                                <CardContent className="flex-grow ml-4">
                                    <div className="text-sm text-gray-500">Latitude</div>
                                    <div className="font-bold text-lg">{data2[0]?.latitude || "N/A"}</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Longitude */}
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <Card className="flex flex-row p-4 ">
                                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                                    {/* Longitude Icon */}
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 2v20m0-20a10 10 0 110 20"
                                        />
                                    </svg>
                                </div>
                                <CardContent className="flex-grow ml-4">
                                    <div className="text-sm text-gray-500">Longitude</div>
                                    <div className="font-bold text-lg">{data2[0]?.longitude || "N/A"}</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
