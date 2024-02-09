import Sidebar from '../ui/sidebar'
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-row md:flex-row  md:overflow-y-auto md:p-12">
              <Sidebar />
            <div>
             {children}
            </div>
      </div>
    )
}