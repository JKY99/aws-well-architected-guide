import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP02 — 비용 및 사용량에 조직 정보 추가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>비용 데이터에 조직 정보를 추가하여 비용이 어느 팀, 프로젝트, 부서에서 발생했는지 파악할 수 있도록 합니다.</p>
      <h2>원하는 결과</h2>
      <p>비용 및 사용량 데이터가 조직 구조와 연계되어 정확한 비용 귀속이 가능합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스에 태그가 없거나 일관성이 없습니다.</li>
        <li>비용 데이터가 조직 구조와 연계되지 않습니다.</li>
        <li>어느 팀이나 프로젝트에서 비용이 발생했는지 파악이 어렵습니다.</li>
        <li>태그 누락 리소스의 비용이 미할당 상태로 남습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용이 팀, 프로젝트, 환경별로 정확하게 귀속됩니다.</li>
        <li>쇼백(showback)이나 차지백(chargeback) 메커니즘을 구현할 수 있습니다.</li>
        <li>비용 최적화 기회를 조직 수준에서 식별합니다.</li>
        <li>예산 관리가 조직 단위로 가능합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>태깅 전략 수립: 일관된 태그 키와 값의 명명 규칙을 정의합니다.</li>
        <li>태그 정책 시행: AWS Organizations 태그 정책을 통해 일관된 태깅을 강제합니다.</li>
        <li>AWS Cost Categories: 태그, 계정, 서비스를 기반으로 비용 카테고리를 생성합니다.</li>
        <li>태그 준수 모니터링: AWS Config를 통해 태그 누락 리소스를 정기적으로 감사합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Categories</li>
        <li>AWS Resource Groups</li>
        <li>Cost Allocation Tags</li>
        <li>AWS Config</li>
        <li>AWS Organizations</li>
      </ul>
      <PageNav />
    </article>
  );
}
