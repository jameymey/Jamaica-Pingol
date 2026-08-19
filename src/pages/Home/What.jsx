import { Brain, CircleCheckBig, Code2, Database, LaptopMinimalCheck, Palette } from 'lucide-react';

export const What = () => {
       const whatIdo = [
        {
            icon: LaptopMinimalCheck,
            title: "System Analysis",
            description: "Understand requirements, break down problems, and help turn ideas into practical solutions."
        },
        {
            icon: Code2,
            title: "Web Development",
            description: "Build responsive and user-friendly web applications that are simple and enjoyable to use."
        },
        {
            icon: CircleCheckBig,
            title: "QA & Testing",
            description: "Test features, spot issues, and make sure systems work the way they should."
        },
        {
            icon: Database,
            title: "Database & SQL",
            description: "Work with data, design structured databases, and write queries to keep information organized."
        },
        {
            icon: Brain,
            title: "Artificial Intelligence",
            description: "Explore and integrate AI to build smarter, more personalized, and practical solutions."
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Create clean and intuitive interfaces with a focus on usability and a better user experience."
        }
    ];

    return (
        <section id="what-i-do" className="bg-muted relative overflow-hidden py-20">
            <div className="container mx-auto px-6 animate-fade-in">
                <span className="block text-center mb-4 text-sm font-medium text-primary tracking-wider uppercase">What I Work On</span>
                <h2 className="mb-2 text-center text-4xl font-bold md:text-5xl animate-fade-in animation-delay-100">
                    A Little Bit of Everything
                </h2>
                <p className="mb-8 text-lg text-foreground max-w-4xl mx-auto text-center animate-fade-in animation-delay-200">
                   From understanding systems to building websites, testing features, and exploring AI, I enjoy working across different parts of the development process.
                </p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {whatIdo.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-100 transition-all ease-out duration-300 hover:-translate-y-1 hover:border-primary">
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