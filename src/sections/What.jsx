import { Brain, CircleCheckBig, Code2, Database, LaptopMinimalCheck, Palette } from 'lucide-react';

export const What = () => {
    const whatIdo = [
        {
            icon: LaptopMinimalCheck,
            title: "System Analysis",
            description: "Analyze requirements and design solutions that address real-world needs."
        },
        {
            icon: Code2,
            title: "Web Development",
            description: "Build responsive and user-focused web applications."
        },
        {
            icon: CircleCheckBig,
            title: "QA & Testing",
            description: "Test systems to identify issues and ensure reliable functionality."
        },
        {
            icon: Database,
            title: "Database & SQL",
            description: "Organize, manage, and work with data efficiently."
        },
        {
            icon: Brain,
            title: "Artificial Intelligence",
            description: "Integrate AI to create smarter and more personalized solutions."
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Design intuitive and engaging interfaces focused on usability and user experience."
        }
    ];

    return (
        <section className="relative overflow-hidden py-32">
            <div className="container mx-auto px-6 animate-fade-in">
                <h2 className="mb-2 text-center text-4xl font-bold text-primary md:text-5xl">
                    What I Do
                </h2>
                <p className="mb-8 text-lg text-foreground max-w-4xl mx-auto text-center">
                    I build practical digital solutions through analysis, development, testing, and problem-solving.
                </p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {whatIdo.map((item, index) => (
                        <div key={index} className="glass-stronger rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
                            <item.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};