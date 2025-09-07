import Card from "@/components/common/Card";
import axios from "axios";
import { useEffect, useState } from "react";

type Property = {
  id: string | number;
  // add other fields as needed, e.g. title: string;
};

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        Loading...
      </div>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        No properties found.
      </div>
    );
  }

  return <main className="w-full space-y-4 font-quicksand">
    <div className="text-2xl font-bold">Properties</div>
    <div>
      {properties.map((property) => (
        <Card key={property.id} property={property} title={""} />
      ))}
    </div>
  </main>;
}
