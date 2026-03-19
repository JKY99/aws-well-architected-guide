import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP04 — 관리형 서비스로 총소유비용(TCO) 줄이기</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>자체 관리 서비스 대신 AWS 관리형 서비스를 활용하여 운영 부담과 총소유비용(TCO)을 줄입니다.</p>
      <h2>원하는 결과</h2>
      <p>관리형 서비스 활용으로 운영 비용과 TCO를 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>EC2에서 자체 관리 데이터베이스를 운영합니다.</li>
        <li>패치 및 백업을 직접 관리합니다.</li>
        <li>관리형 서비스의 TCO를 고려하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 부담이 감소합니다.</li>
        <li>고가용성이 자동화됩니다.</li>
        <li>전체 TCO가 절감됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>자체 관리 DB를 RDS/Aurora로 마이그레이션합니다.</li>
        <li>자체 관리 컨테이너를 ECS/EKS Fargate로 전환합니다.</li>
        <li>TCO 비교 분석을 수행합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS</li>
        <li>Amazon Aurora</li>
        <li>AWS Fargate</li>
        <li>Amazon ElastiCache</li>
        <li>AWS TCO Calculator</li>
      </ul>
      <PageNav />
    </article>
  );
}
