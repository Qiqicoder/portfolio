import { Footer } from '~/components/footer';
import { ProjectContainer } from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './fireboy-watergirl.module.css';
import { useTheme } from '~/components/theme-provider';
import projectStyles from '~/styles/project.module.css';
import { ProjectNav } from '~/components/project-nav/project-nav';

export const meta = () => {
  return baseMeta({
    title: 'Fireboy & Watergirl',
    description: 'Built a Python-based 2D platformer with dynamically generated levels, enabling two players to collaborate in real-time to solve physics-driven puzzles and navigate shifting obstacles.',
    prefix: 'Projects',
  });
};

export const FireboyWatergirl = () => {
  const { theme } = useTheme();

  return (
    <Fragment>
      <ProjectContainer className={styles.fireboyWatergirl}>
        <div className={styles.slogan}>
          <div className={styles.sloganSubtitle}>Fireboy & Watergirl</div>
          <h1 className={styles.sloganTitle}>
            Sync to Survive: Leap, Solve, Repeat!
          </h1>
          <div className={styles.sloganDivider} />
        </div>
        
        <div className={styles.mainContent}>
          <div className={projectStyles.projectInfo}>
            <section className={projectStyles.contentSection}>
              <div className={projectStyles.contentLeft}>
                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>Tech Stack</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Python Pillow (PIL)</li>
                    <li>CMU Graphics</li>
                    <li>Custom Physics Engine</li>
                  </ul>
                </div>

                <div className={projectStyles.infoBlock}>
                  <h2 className={projectStyles.infoTitle}>My Contribution</h2>
                  <ul className={projectStyles.infoList}>
                    <li>Dynamic platform generation algorithm</li>
                    <li>Dual-player control synchronization</li>
                    <li>Physics-based obstacle interactions</li>
                    <li>Collaborative puzzle mechanics</li>
                  </ul>
                </div>
              </div>

              <div className={projectStyles.contentRight}>
                <div className={projectStyles.overviewBlock}>
                  <h2 className={projectStyles.overviewTitle}>Overview</h2>
                  <p className={projectStyles.overviewText}>
                    Developed a Python-based 2D platformer where two players cooperate in real-time to traverse procedurally generated levels, solving physics-driven puzzles with synchronized actions like button triggers and obstacle navigation.
                  </p>
                  <a 
                    href="https://github.com/Qiqicoder/Fireboy-Watergirl-2.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className={styles.githubIcon}
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Github Code Sample
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.videoFrame}
              src="https://www.youtube.com/embed/nLxmk9BEezg"
              title="Fireboy & Watergirl Gameplay"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </ProjectContainer>
      <ProjectNav currentPath="/projects/fireboy-watergirl" />
      <Footer />
    </Fragment>
  );
}; 