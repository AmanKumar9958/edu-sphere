import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <p>This is the home page.</p>
            <Button>Hello</Button>
            <UserButton />
        </div>
    );
}