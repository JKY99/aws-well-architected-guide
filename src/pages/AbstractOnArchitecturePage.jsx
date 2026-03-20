import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AbstractOnArchitecturePage() {
  return (
    <article className="doc-content">
      <h1>아키텍처에 대하여</h1>

      <h2>온프레미스 환경의 아키텍처 접근 방식</h2>

      <p>
        온프레미스 환경에서는 보통 중앙집중식 기술 아키텍처 팀이 제품/기능 팀들을 감독하며 모범 사례 준수를 검증합니다.
        이 팀은 다음 역할들로 구성됩니다:
      </p>

      <ul>
        <li>기술 아키텍트 (인프라)</li>
        <li>솔루션 아키텍트 (소프트웨어)</li>
        <li>데이터 아키텍트</li>
        <li>네트워킹 아키텍트</li>
        <li>보안 아키텍트</li>
      </ul>

      <p>
        TOGAF 또는 Zachman Framework 같은 엔터프라이즈 아키텍처 방법론을 활용합니다.
      </p>

      <h2>AWS의 분산 아키텍처 접근 방식</h2>

      <p>
        AWS는 중앙 팀 대신 <strong>역량을 각 팀에 분산</strong>하는 방식을 선호합니다.
        의사결정 권한 분산의 위험은 두 가지 방법으로 완화합니다:
      </p>

      <ol>
        <li>
          <strong>실천 (Practices):</strong> 각 팀이 자체 역량을 보유하도록 하는 방식·프로세스·표준.
          전문가들이 팀의 기준 충족 여부를 검증합니다.
        </li>
        <li>
          <strong>메커니즘 (Mechanisms):</strong> 표준 충족 여부를 검증하는 자동화된 검사.
        </li>
      </ol>

      <div className="doc-note">
        <div className="doc-note-title">Jeff Bezos</div>
        <p>
          "선의만으로는 부족하다. 어떤 일이든 일어나게 하려면 좋은 메커니즘이 필요하다."
        </p>
      </div>

      <p>
        이 분산 접근 방식은 Amazon 리더십 원칙을 바탕으로 하며, 모든 역할에서
        <strong>고객으로부터 역방향 사고(Working Backward)</strong>하는 문화를 형성합니다.
      </p>

      <h2>아키텍처 역량 구축</h2>

      <p>
        AWS는 모든 팀이 아키텍처를 설계하고 모범 사례를 따를 역량을 갖출 것을 기대합니다.
        이를 위해 수석 엔지니어(Principal Engineers) 가상 커뮤니티를 운영합니다:
      </p>

      <ul>
        <li>모범 사례를 가시화하고 접근 가능하게 만들기</li>
        <li>실제 사례에 모범 사례를 적용하는 런치 강연 진행</li>
        <li>온보딩 자료로 활용할 강연 녹화</li>
      </ul>

      <h2>Well-Architected Framework의 위상</h2>

      <p>
        Well-Architected Framework는 AWS 내부 리뷰 프로세스의 고객 향 구현체입니다.
        수석 엔지니어의 사고를 솔루션 아키텍처 등 현장 역할과 내부 엔지니어링 팀 전반에 체계화한 것으로,
        고객이 AWS의 학습 성과를 활용할 수 있는 확장 가능한 메커니즘입니다.
      </p>

      <p>
        기술 리더(CTO, 개발 관리자)가 Well-Architected 리뷰를 수행하면:
      </p>

      <ul>
        <li>기술 포트폴리오의 위험 파악</li>
        <li>팀 공통 과제 식별</li>
        <li>메커니즘·교육·지식 공유로 조직적 문제 해결</li>
      </ul>

      <PageNav />
    </article>
  );
}
