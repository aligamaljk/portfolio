import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Timeline
          data={[
            {
              title: 'Timeline',
              content: (
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur dolorum corporis quisquam, corrupti facere nam
                    molestiae placeat possimus asperiores consequatur.
                  </p>
                </div>
              ),
            },
            {
              title: 'Timeline22',
              content: (
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur dolorum corporis quisquam, corrupti facere nam
                    molestiae placeat possimus asperiores consequatur.
                  </p>
                </div>
              ),
            },
            {
              title: 'Timeline2222',
              content: (
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur dolorum corporis quisquam, corrupti facere nam
                    molestiae placeat possimus asperiores consequatur.
                  </p>
                </div>
              ),
            },
          ]}
        /> */}
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
