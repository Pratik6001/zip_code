import * as React from "react";
import data from "@/app/components/data.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatusButton from "./status-button";
import { useState } from "react";

export default function NavBar({ fun, value }: any) {
  const [inputValue, setInputValue] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  // Handle postal code input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    value(newValue); // Update the parent state
  };

  // Handle country selection change
  const handleCountryChange = (selectedCountry: string) => {
    setInputCountry(selectedCountry);
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white">
      {/* Logo */}
      <div className="text-xl font-semibold">Zip Code Validator</div>

      {/* Form in Navbar */}
      <div className="flex items-center space-x-4">
        {/* Postal Code Input */}
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="postalCode" className="sr-only">Postal Code</Label>
          <Input
            id="postalCode"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Postal Code"
            className="max-w-[150px]"
            required
          />
        </div>

        {/* Country Select */}
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="country" className="sr-only">Country</Label>
          <Select onValueChange={handleCountryChange}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent position="popper">
              {data && data.map((item) => (
                <SelectItem key={item.code} value={item.code}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Check Button */}
        <StatusButton fun={fun} value={inputValue} country={inputCountry} />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>
      </div>
    </nav>
  );
}
