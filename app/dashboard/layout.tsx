import SideNav from '@/app/ui/dashboard/sidenav';

// Nota: Aquí NO hace falta repetir el objeto 'metadata' completo
// a menos que quieras sobreescribir algo específico.

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}