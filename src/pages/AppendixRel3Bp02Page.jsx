import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL03-BP02 — 마이크로서비스 아키텍처 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>단일 비즈니스 기능을 담당하는 소형 독립 서비스로 분해하여 유연성과 확장성을 극대화합니다.</p>
      <h2>원하는 결과</h2>
      <p>각 서비스가 독립적으로 배포, 확장, 유지 가능한 아키텍처</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>과도한 세분화</li>
        <li>서비스 간 직접 데이터베이스 접근</li>
        <li>분산 모놀리스</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>기술 스택 유연성</li>
        <li>독립적 스케일링</li>
        <li>장애 격리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>바운디드 컨텍스트 설계</li>
        <li>컨테이너화</li>
        <li>서비스 메시 도입</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EKS</li>
        <li>Amazon ECS</li>
        <li>AWS Fargate</li>
        <li>AWS App Mesh</li>
        <li>Amazon ECR</li>
      </ul>
      <PageNav />
    </article>
  );
}
