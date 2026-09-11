export default function FeatureCard({ feature }) {
  const Icon = feature.icon;
  
  return (
    <div className="flex flex-col items-center">
      <Icon className={`w-10 h-10 ${feature.color} mb-6`} strokeWidth={1} />
      <h3 className="font-serif text-2xl text-brand-text mb-4">{feature.title}</h3>
      <p className="text-brand-text-light leading-relaxed text-sm">{feature.description}</p>
    </div>
  );
}
