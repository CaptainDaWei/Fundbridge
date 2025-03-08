"use client";

import { useState, useEffect } from "react";
import { 
  Calendar,
  Clock, 
  FileText, 
  ArrowUpDown, 
  DollarSign, 
  Tag, 
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { format, isAfter, addDays, parseISO } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";

// Custom date picker component since we don't have the shadcn one
function DatePicker({ 
  selected, 
  onSelect, 
  placeholder,
  className
}: { 
  selected?: Date; 
  onSelect: (date: Date) => void; 
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <input 
        type="date" 
        className="w-full p-2 border rounded-md" 
        value={selected ? format(selected, "yyyy-MM-dd") : ""}
        onChange={(e) => {
          if (e.target.value) {
            onSelect(new Date(e.target.value));
          }
        }}
        placeholder={placeholder}
      />
    </div>
  )
}

// Define our filters component
const Filters = {
  Root: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      {children}
    </div>
  ),
  Search: ({ placeholder }: { placeholder: string }) => (
    <div className="mb-4">
      <input 
        type="search" 
        placeholder={placeholder} 
        className="w-full p-2 border rounded-md" 
      />
    </div>
  ),
  Group: ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-wrap gap-2 mb-4">{children}</div>
  ),
  Clear: ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <Button variant="outline" size="sm" onClick={onClick}>
      {children}
    </Button>
  ),
  Popover: ({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="relative group">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        {icon}
        {label}
      </Button>
      <div className="absolute z-50 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-md shadow-lg border">
        {children}
      </div>
    </div>
  ),
  Dropdown: ({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="relative group">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        {icon}
        {label}
      </Button>
      <div className="absolute z-50 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-md shadow-lg border min-w-[200px]">
        {children}
      </div>
    </div>
  ),
  Separator: () => (
    <div className="h-6 border-l border-gray-200 dark:border-gray-700"></div>
  ),
  ActiveFilters: ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-wrap gap-2 mt-4">
      {children}
    </div>
  ),
  ActiveFilter: ({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) => (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
      {children}
      <button onClick={onRemove} className="ml-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        ×
      </button>
    </div>
  ),
};

const ALL_CATEGORIES = [
  "Environment",
  "Education",
  "Health",
  "Technology",
  "Innovation",
  "Community",
  "Arts & Culture",
  "Sustainability",
  "Social Justice",
  "Research",
];

const MOCK_GRANTS = [
  {
    id: 1,
    title: "Community Innovation Grant",
    description: "Funds for local community-based projects",
    isNew: true,
    amount: { min: 5000, max: 25000 },
    deadline: "2023-06-30",
    focusAreas: ["Community", "Education"],
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    title: "Environmental Sustainability Fund",
    description: "Support for projects addressing climate change",
    isNew: false,
    amount: { min: 10000, max: 50000 },
    deadline: "2023-07-15",
    focusAreas: ["Environment", "Sustainability"],
    createdAt: "2023-02-10",
  },
  {
    id: 3,
    title: "Technological Innovation Initiative",
    description: "For tech-driven solutions to social challenges",
    isNew: false,
    amount: { min: 15000, max: 75000 },
    deadline: "2023-08-01",
    focusAreas: ["Technology", "Innovation"],
    createdAt: "2023-03-05",
  },
  {
    id: 4,
    title: "Health Equity Fellowship",
    description: "Supporting healthcare initiatives for underserved communities",
    isNew: true,
    amount: { min: 20000, max: 100000 },
    deadline: "2023-09-15",
    focusAreas: ["Health", "Social Justice"],
    createdAt: "2023-04-20",
  },
  {
    id: 5,
    title: "Arts & Culture Development Grant",
    description: "Preserving and promoting cultural heritage and artistic expression",
    isNew: false,
    amount: { min: 7500, max: 30000 },
    deadline: "2023-10-30",
    focusAreas: ["Arts & Culture", "Community"],
    createdAt: "2023-05-12",
  },
  {
    id: 6,
    title: "Research Advancement Fund",
    description: "Supporting academic and scientific research projects",
    isNew: false,
    amount: { min: 25000, max: 150000 },
    deadline: "2023-11-15",
    focusAreas: ["Research", "Education", "Technology"],
    createdAt: "2023-06-01",
  },
];

export default function FundsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [amountRange, setAmountRange] = useState<[number, number]>([0, 150000]);
  const [deadlineAfter, setDeadlineAfter] = useState<Date | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>("deadline");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filteredGrants, setFilteredGrants] = useState(MOCK_GRANTS);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...MOCK_GRANTS];
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(grant => 
        grant.focusAreas.some(area => selectedCategories.includes(area))
      );
    }
    
    // Apply amount range filter
    result = result.filter(grant => 
      grant.amount.max >= amountRange[0] && grant.amount.min <= amountRange[1]
    );
    
    // Apply deadline filter
    if (deadlineAfter) {
      result = result.filter(grant => 
        isAfter(parseISO(grant.deadline), deadlineAfter)
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "deadline") {
        const dateA = new Date(a.deadline).getTime();
        const dateB = new Date(b.deadline).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else if (sortBy === "amount") {
        const amountA = a.amount.max;
        const amountB = b.amount.max;
        return sortOrder === "asc" ? amountA - amountB : amountB - amountA;
      } else if (sortBy === "title") {
        return sortOrder === "asc" 
          ? a.title.localeCompare(b.title) 
          : b.title.localeCompare(a.title);
      } else { // createdAt
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }
    });
    
    setFilteredGrants(result);
  }, [selectedCategories, amountRange, deadlineAfter, sortBy, sortOrder]);

  // Toggle sort order
  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setAmountRange([0, 150000]);
    setDeadlineAfter(undefined);
    setSortBy("deadline");
    setSortOrder("asc");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Funding Opportunities</h1>

      <div className="mb-8">
        <Filters.Root>
          <Filters.Search placeholder="Search opportunities..." />
          
          <Filters.Group>
            <Filters.Clear onClick={resetFilters}>Reset filters</Filters.Clear>
            
            <Filters.Popover label="Categories" icon={<Tag size={16} />}>
              <div className="p-4">
                <h4 className="font-medium mb-2">Focus Areas</h4>
                <div className="grid grid-cols-2 gap-2">
                  {ALL_CATEGORIES.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={category} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories(prev => [...prev, category]);
                          } else {
                            setSelectedCategories(prev => prev.filter(c => c !== category));
                          }
                        }}
                      />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Filters.Popover>
            
            <Filters.Popover label="Amount" icon={<DollarSign size={16} />}>
              <div className="p-4 w-80">
                <h4 className="font-medium mb-4">Funding Amount Range</h4>
                <div className="mb-6">
                  <Slider 
                    defaultValue={[0, 150000]} 
                    value={amountRange}
                    min={0} 
                    max={150000}
                    step={5000}
                    onValueChange={(value) => setAmountRange(value as [number, number])}
                  />
                </div>
                <div className="flex justify-between">
                  <span>${amountRange[0].toLocaleString()}</span>
                  <span>${amountRange[1].toLocaleString()}</span>
                </div>
              </div>
            </Filters.Popover>
            
            <Filters.Popover label="Deadline" icon={<Calendar size={16} />}>
              <div className="p-4 w-80">
                <h4 className="font-medium mb-2">Deadline After</h4>
                <DatePicker
                  selected={deadlineAfter}
                  onSelect={setDeadlineAfter}
                  placeholder="Select deadline..."
                  className="w-full"
                />
                <div className="mt-4 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDeadlineAfter(new Date())}
                  >
                    Today
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDeadlineAfter(addDays(new Date(), 30))}
                  >
                    +30 Days
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDeadlineAfter(addDays(new Date(), 90))}
                  >
                    +90 Days
                  </Button>
                </div>
              </div>
            </Filters.Popover>
            
            <Filters.Separator />
            
            <Filters.Dropdown label="Sort" icon={<ArrowUpDown size={16} />}>
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => toggleSort("deadline")}
                >
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    Deadline
                    {sortBy === "deadline" && (
                      <span className="ml-auto">{sortOrder === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => toggleSort("amount")}
                >
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-2" />
                    Amount
                    {sortBy === "amount" && (
                      <span className="ml-auto">{sortOrder === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => toggleSort("title")}
                >
                  <div className="flex items-center">
                    <FileText size={16} className="mr-2" />
                    Title
                    {sortBy === "title" && (
                      <span className="ml-auto">{sortOrder === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => toggleSort("createdAt")}
                >
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    Recently Added
                    {sortBy === "createdAt" && (
                      <span className="ml-auto">{sortOrder === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </Button>
              </div>
            </Filters.Dropdown>
          </Filters.Group>
          
          <Filters.ActiveFilters>
            {selectedCategories.length > 0 && (
              <Filters.ActiveFilter onRemove={() => setSelectedCategories([])}>
                {selectedCategories.length} Categories
              </Filters.ActiveFilter>
            )}
            
            {!(amountRange[0] === 0 && amountRange[1] === 150000) && (
              <Filters.ActiveFilter onRemove={() => setAmountRange([0, 150000])}>
                ${amountRange[0].toLocaleString()} - ${amountRange[1].toLocaleString()}
              </Filters.ActiveFilter>
            )}
            
            {deadlineAfter && (
              <Filters.ActiveFilter onRemove={() => setDeadlineAfter(undefined)}>
                After {format(deadlineAfter, "MMM dd, yyyy")}
              </Filters.ActiveFilter>
            )}
          </Filters.ActiveFilters>
        </Filters.Root>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGrants.map((grant) => (
          <div 
            key={grant.id} 
            className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              {grant.isNew && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  New
                </span>
              )}
              <h3 className="text-2xl font-semibold leading-none tracking-tight">{grant.title}</h3>
              <p className="text-sm text-muted-foreground">
                {grant.description}
              </p>
            </div>
            <div className="p-6 pt-0 grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Grant Amount:</span>
                <span>${grant.amount.min.toLocaleString()} - ${grant.amount.max.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Application Deadline:</span>
                <span>{format(parseISO(grant.deadline), "MMM d, yyyy")}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Focus Areas:</span>
                <span>{grant.focusAreas.join(", ")}</span>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Button className="w-full">Apply Now</Button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredGrants.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <CheckCircle className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No matching opportunities</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Try adjusting your filters or search terms to find more funding opportunities.
          </p>
          <Button variant="outline" className="mt-4" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
} 