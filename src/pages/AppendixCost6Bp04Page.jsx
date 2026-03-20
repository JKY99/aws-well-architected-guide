import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP04 — 공유 리소스 사용 고려</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>여러 워크로드 또는 팀이 리소스를 공유하면 총 비용을 절감하고 전반적인 활용도를 높일 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>공유 가능한 리소스를 식별하고, 여러 워크로드가 자원을 효율적으로 공유하여 전체 비용을 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 팀이 독립적으로 유사한 인프라를 중복 구축합니다.</li>
        <li>공유 리소스의 보안 및 격리 문제로 공유를 기피합니다.</li>
        <li>공유 리소스의 비용 할당 방법이 없어 공유를 거부합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중복 인프라 비용이 절감됩니다.</li>
        <li>리소스 활용률이 향상됩니다.</li>
        <li>공유 서비스 팀을 통해 전문성이 집중됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EKS, Amazon ECS를 사용하여 컨테이너 워크로드를 공유 클러스터에서 실행합니다.</li>
        <li>AWS Resource Access Manager(RAM)를 사용하여 VPC, 서브넷, Transit Gateway를 계정 간 공유합니다.</li>
        <li>공유 데이터베이스, 캐시, 메시지 큐를 도입하여 중복을 제거합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Resource Access Manager</li>
        <li>Amazon EKS</li>
        <li>Amazon ElastiCache</li>
        <li>Amazon RDS Proxy</li>
      </ul>
      <PageNav />
    </article>
  );
}
