interface DataPageProps {
    searchParams: Promise<{ data?: string }>;
}

export default async function DataPage({ searchParams }: DataPageProps) {
    const encodedData = await searchParams;

    if (!encodedData.data) return <div>No data</div>;

    const data = JSON.parse(decodeURIComponent(encodedData.data));

    return <main>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}</main>;
}
