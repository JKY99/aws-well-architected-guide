import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps11Bp08Page() {
  return (
    <article className="doc-content">
      <h1>OPS11-BP08 — 교훈 문서화 및 공유</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>

      <p>
        버전 관리 저장소를 사용하여 애플리케이션 라이브러리, 스크립팅된 절차, 절차 문서 및 기타 시스템 문서를 공유합니다.
        인프라 표준을 버전 관리된 AWS CloudFormation 템플릿으로 공유하고 팀 간에 교훈을 검토합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        버전 관리 저장소를 사용하여 애플리케이션 라이브러리, 스크립팅된 절차, 절차 문서를 공유합니다.
        인프라 표준을 버전 관리된 AWS CloudFormation 템플릿으로 공유합니다.
        팀 간에 교훈을 검토합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>문제 있는 라이브러리에서 신뢰할 수 있는 라이브러리로 마이그레이션했지만 다른 팀이 위험을 인식하지 못하는 경우</li>
        <li>공유 마이크로서비스에서 세션 중단을 유발하는 에지 케이스를 발견했지만 해당 팀만 알고 있는 경우</li>
        <li>마이크로서비스의 CPU 활용도를 줄이는 방법을 찾았지만 다른 팀이 이점을 얻지 못하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>교훈을 공유하여 개선을 지원하고 경험의 이점을 극대화</li>
        <li>조직 전체에 걸쳐 회피 가능한 오류 방지</li>
        <li>개발 노력을 용이하게 하고 원하는 기능 제공에 집중</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>운영 활동 및 소급 분석에서 얻은 교훈을 문서화하는 절차를 갖춥니다.</li>
        <li>접근 가능한 위키(업데이트된 절차, 지침, 거버넌스, 모범 사례)를 통해 팀 간에 학습을 공유합니다.</li>
        <li>공통 저장소(스크립트, 코드, 라이브러리)를 활용합니다.</li>
        <li>조직 내 협업 및 지식 공유를 위해 AWS re:Post Private를 사용합니다.</li>
        <li>버전 관리된 AWS CloudFormation 템플릿으로 인프라 표준을 공유합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Identity and Access Management (IAM) — 공유 리소스에 대한 접근 제어</li>
        <li>AWS CloudFormation — 버전 관리된 인프라 표준</li>
        <li>AWS re:Post Private — 내부 협업을 위한 지식 서비스</li>
        <li>AWS CodeCommit — 코드 및 문서 버전 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
