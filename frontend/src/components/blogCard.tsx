interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div className="p-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
                <Avatar name={authorName} /> 
                <span>{authorName} · {publishedDate}</span>
            </div>
            <h2 className="text-lg font-bold mt-2">{title}</h2>
            <p className="text-gray-600">{content.slice(0, 100) + "..."}</p>
            <span className="text-sm text-gray-500">
                {`${Math.ceil(content.length / 100)} minutes`}
            </span>
        </div>
    );
};

export function Avatar({ name }: { name: string }) {
    const getInitials = (fullName: string) => {
        const nameParts = fullName.trim().split(" ");
        const firstInitial = nameParts[0] ? nameParts[0][0].toUpperCase() : "";
        const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1][0].toUpperCase() : "";
        return firstInitial + lastInitial;
    };

    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
                {getInitials(name)}
            </span>
        </div>
    );
}
