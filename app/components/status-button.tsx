import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";



const wait = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function StatusButton({ fun, value, country }: any) {
    const [status, setStatus] = useState<"loading" | "search" | "Valid" | undefined>();
    const isEnabled = !status || status === "search";

    const changeStatus = async () => {
        if (!isEnabled) {
            return;
        }

        setStatus("loading"); // Set loading status
        await wait(1500); // Simulate loading delay

        // Call the function with the input value
        fun(value, country);

        setStatus("Valid"); // Set checked status
        await wait(1500); // Wait to show checked status
        setStatus("search"); // Reset to search status
    };

    return (
        <button
            onClick={changeStatus}
            disabled={!isEnabled}
            className="group relative h-10 min-w-40 overflow-hidden rounded-md bg-teal-500 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-600"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={status}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.075 }}
                    className={cn("flex items-center justify-center gap-1")}
                >
                    {status === "Valid" && (
                        <motion.span
                            className="h-fit w-fit"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.075, type: "spring" }}
                        >
                            <CheckCircle2 className="h-4 w-4 fill-white stroke-teal-500 group-hover:stroke-teal-600" />
                        </motion.span>
                    )}

                    {status === "loading" ? (
                        <CircleDashed className="h-4 w-4 animate-spin" />
                    ) : (
                        status ?? "Search"
                    )}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
