import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP01 — 가용 영역과 리전 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>여러 가용 영역(AZ)에 리소스를 분산 배치하여 단일 AZ 장애 시에도 서비스 가용성을 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>AZ 장애 시 무중단 서비스 유지</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 AZ 배포</li>
        <li>AZ 간 부하 불균형</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>고가용성 달성</li>
        <li>단일 장애 지점 제거</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>최소 2개 이상의 AZ 사용</li>
        <li>ELB로 AZ 간 트래픽 분산</li>
        <li>Multi-AZ RDS 사용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2</li>
        <li>Elastic Load Balancing</li>
        <li>Amazon RDS Multi-AZ</li>
        <li>Amazon ECS</li>
      </ul>
      <PageNav />
    </article>
  );
}
