export const metadata = {
    title: 'our product',
    description: 'all about our product',
  }

export default function layout({children}) {
  return (
    <div>
    
        <section>
            {children}
        </section>
        
        </div>
  )
}
